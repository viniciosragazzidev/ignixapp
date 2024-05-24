export enum HttpErrorCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

export enum HttpRoutes {
  user = "/xu23r",
  orders = "/x0rd3rs",
}

export enum StatusOs {
  PENDENTE = "Pendente",
  INICIADO = "Iniciado",
  FINALIZADO = "Finalizado",
  ENTREGUE = "Entregue",
  CANCELADO = "Cancelado",
  FECHADO = "Fechado",
}
