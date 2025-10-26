interface Settings {
  formatMessages?: boolean;
}

class Logger {
  settings: Settings;

  constructor() {
    this.settings = {
      formatMessages: false,
    };
  }

  private join(args: string[]) {
    return args.join(" ");
  }

  private log(type: string, message: string, style?: string) {
    console.log(
      `%c${new Date().toLocaleDateString()} / ${new Date().toLocaleTimeString()} - ${type.toUpperCase()}: ${message}`,
      style ? style : ""
    );
  }

  debug(...args: string[]) {
    const message = this.join(args);
    this.log("debug", message, "color: #EC4899;");
  }

  info(...args: string[]) {
    const message = this.join(args);
    this.log("info", message, "color: #22C55E;");
  }

  warn(...args: string[]) {
    const message = this.join(args);
    this.log("warn", message, "color: #EAB308;");
  }

  error(...args: string[]) {
    const message = this.join(args);
    this.log("error", message, "color: #EF4444;");
  }

  set config(settings: Settings) {
    this.settings = settings;
  }
}

const logger = new Logger();

export default logger;
