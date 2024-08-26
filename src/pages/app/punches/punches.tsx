import { Helmet } from "react-helmet-async";
import { Input } from "../../../components/ui/input";
import { Table, TableHead, TableHeader, TableRow } from "../../../components/ui/table";

export function Punches() {
  return (
    <>
      <Helmet title="Batidas" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Batidas</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="Filtro" className="h-8 w-[320px]" />
        </form>

        <div className="rounded-medium border">
          <Table>
            <TableHeader>
                <TableRow>
                    <TableHead></TableHead>
                    <TableHead>Identificador</TableHead>
                    <TableHead>Genérico</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Funcionário</TableHead>
                    <TableHead>Numeral</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
          </Table>
        </div>
      </div>
    </>
  );
}
