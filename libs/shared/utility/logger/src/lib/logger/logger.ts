import { createLogger, format, transports } from "winston";

const LOG_LEVEL = process.env.LOG_LEVEL ?? "info";

const enumerateErrorFormat = format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

export const logger = createLogger({
  format: format.combine(
    enumerateErrorFormat(),
    process.env.NODE_ENV === "development" ? format.colorize() : format.uncolorize(),
    format.splat(),
    format.printf(({ level, message }) => `${level}: ${message}`),
  ),
  level: process.env.NODE_ENV === "development" ? "debug" : LOG_LEVEL,
  silent: process.env.JEST_WORKER_ID !== undefined,
  transports: [
    new transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});
