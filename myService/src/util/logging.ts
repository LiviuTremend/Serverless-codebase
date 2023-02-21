import { createLogger, format, transports } from 'winston'
const { combine, timestamp, prettyPrint, colorize, errors } = format

export const logger = createLogger({
  level: process.env.CLOUDWATCH_DEBUG_LEVEL,
  format: combine(
    errors({ stack: true }),
    colorize(),
    timestamp(),
    prettyPrint()
  ),
  defaultMeta: { service: 'user-activity-audit' },
  transports: [
    new transports.Console()
  ]
})