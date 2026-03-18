/**
 * Gestor de configuración de la aplicación implementado como Singleton.
 */
export class AppConfig {
  private static instance: AppConfig;

  /**
   * Mapa interno de configuración en forma de pares de tipo string.
   */
  private readonly config: Map<string, string>;

  /**
   * Constructor privado.
   */
  private constructor() {
    this.config = new Map<string, string>();
  }

  /**
   * Devuelve la única instancia de AppConfig, creándola si no existe.
   */
  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  /**
   * Establece un valor a la configuracion.
   *
   * @param key - Clave de la configuracion.
   * @param value - Valor asociado a la clave.
   */
  public set(key: string, value: string): void {
    this.config.set(key, value);
  }

  /**
   * Obtiene un valor de configuración.
   *
   * @param key - Clave de configuración.
   * @returns El valor asociado a la clave o undefined si no existe.
   */
  public get(key: string): string | undefined {
    return this.config.get(key);
  }

  /**
   * Obtiene una copia de la configuracion.
   *
   * @returns Copia de la configuracion.
   */
  public getAll(): Map<string, string> {
    return {...this.config};
  }

  /**
   * Vacía toda la configuración almacenada.
   * Solo permitido si env === "test".
   *
   * @throws Error si no se cumple la condición de entorno de pruebas.
   */
  public reset(): void {
    if (!this.config.has("env") || this.config.get("env") !== "test") {
      throw new Error("reset() solo está permitido en entorno de pruebas");
    }
    for (const key of Object.keys(this.config)) {
      this.config.delete(key);
    }
  }

  /**
   * Carga de forma automatica un conjunto de claves predefinidas.
   * @param profile - Perfil a cargar.
   */
  public loadProfile(profile: "development" | "production"): void {
    if (profile === "development") {
      this.set("apiUrl", "http://localhost:3000");
      this.set("theme", "dark");
      this.set("lang", "es");
    } else {
      this.set("apiUrl", "https://api.miapp.com");
      this.set("theme", "light");
      this.set("lang", "en");
    }
  }
}
