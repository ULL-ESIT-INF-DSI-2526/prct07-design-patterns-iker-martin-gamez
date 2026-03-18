import { describe, test, expect } from "vitest";
import { AppConfig } from "../../src/modi/config/appConfig.js";

describe("appConfig Singleton", () => {
  const moduleA = AppConfig.getInstance();
  moduleA.set("env", "test");
  const moduleB = AppConfig.getInstance();
  moduleB.set("2", "adios");

  test("comparación de módulos", () => {
    expect(moduleA).toBe(moduleB);
  });

  test("test get", () => {
    expect(moduleA.get("env")).toBe("test");
  });

  test("test getAll", () => {
    expect(moduleA.getAll().size).toBe(2);
  });

  test("test reset", () => {
    moduleA.reset();
    expect(moduleA.getAll.length).toEqual(0);
  });

  test("fail test reset", () => {
    moduleB.set("env", "produccion");
    expect(() => moduleB.reset()).toThrow("reset() solo está permitido en entorno de pruebas");
  });

  test("test loadProfile development", () => {
    moduleA.loadProfile("development");
    expect(moduleA.get("apiUrl")).toBe("http://localhost:3000");
    expect(moduleA.get("theme")).toBe("dark");
    expect(moduleA.get("lang")).toBe("es");
  });

  test("test loadProfile production", () => {
    moduleB.loadProfile("production");
    expect(moduleB.get("apiUrl")).toBe("https://api.miapp.com");
    expect(moduleB.get("theme")).toBe("light");
    expect(moduleB.get("lang")).toBe("en");
  });
});
