import winston, { format } from "winston";

const{ combine, timestamp, json } = format;

const logger = winston.createLogger({
    level: "info",
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.File({ filename: "src/logs/error.log", level: "error" }),
        new winston.transports.File({ filename: "src/logs/combined.log" }),
    ],
});

logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));

export const builLogger = (service) => {
    return{
        log: (message) => {
            logger.info({ message, service});
        },
        error: (message) => {
            logger.error({message, service});
        }
    }
}