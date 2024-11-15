/**
 * The possible logs levels
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
enum LogLevel {
    Off = 0,
    Error,
    Warning,
    Info,
    Debug
}

/**
 * This class is responsible for managing the logger instance
 */
class Logger {
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely
     */
    static level = LogLevel.Debug;

    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    static enableProductionMode() {
        Logger.level = LogLevel.Off;
    }

    constructor(private source?: string)  {}

    /**
     * Logs messages or objects with debug level.
     * Works the same as console.log("Message")
     */
    debug(...objects: any[]): void {
        this.log(console.log, LogLevel.Debug, objects)
    }

    /**
     * Logs messages or objects with info level.
     * Works the same as console.log("Message")
     */
    info(...objects: any[]): void {
        this.log(console.log, LogLevel.Info, objects)
    }

    /**
     * Logs messages or objects with warning level.
     * Works the same as console.log("Message")
     */
    warn(...objects: any[]): void {
        this.log(console.log, LogLevel.Warning, objects)
    }

    /**
     * Logs messages or objects with error level.
     * Works the same as console.log("Message")
     */
    error(...objects: any[]): void {
        this.log(console.log, LogLevel.Error, objects)
    }

    /**
     * This method is responsible for logging to the console
     * In case of development environment, all the messages i.e. debug/warn/info/error will be logged
     * In case of production environment, only error and warn messages will be consoled
     * @param func: console.log
     * @param level: Log level
     * @param objects: message to be logged
     */
    private log(func: Function, level: LogLevel, objects: any[]): void {
        if(level <= Logger.level) {
            const log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
        }
    }
}

const logger: Logger = new Logger();
export default logger;
