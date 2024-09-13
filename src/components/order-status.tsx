export type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatus;
}

/*
 * Observe essa tipagem: Record<OrderStatus, string>
 * Ela diz que é um objeto (Record) cuja chave é
 * uma info do tipo OrderStatus e o valor é uma string
 */
const orderStatusMap: Record<OrderStatus, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  delivered: "Entregue",
  delivering: "Em entrega",
  processing: "Em preparo",
};

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-slate-400"
        />
      )}
      {status === "canceled" && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-rose-500"
        />
      )}
      {status === "delivered" && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-emerald-500"
        />
      )}
      {["processing", "delivering"].includes(status) && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-amber-400"
        />
      )}
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  );
}
