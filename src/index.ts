import { AppConfig } from "../src/modi/config/appConfig.js";

const moduleA = AppConfig.getInstance();
moduleA.set("env", "test");
const moduleB = AppConfig.getInstance();
moduleB.set("2", "adios");
moduleA.reset();
console.log(1)
//console.log(moduleA.getAll.length);
//console.log(moduleB.getAll.length);