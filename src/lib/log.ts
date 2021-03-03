const pino = require("pino");

const logger = pino({
  prettyPrint: {
    colorize: true,
    ignore: "pid,hostname",
    singleLine: false,
    timestampKey: "",
  },
});

export default logger;
