import { Helmet } from "react-helmet-async";
import { Input } from "../../../components/ui/input";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import PunchTableRow from "./punch-table-row";

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
                <TableHead>Data</TableHead>
                <TableHead>Dia da semana</TableHead>
                <TableHead>Entrada</TableHead>
                <TableHead>Saída</TableHead>
                <TableHead>Entrada</TableHead>
                <TableHead>Saída</TableHead>
                <TableHead>Entrada</TableHead>
                <TableHead>Saída</TableHead>
                <TableHead>Normais</TableHead>
                <TableHead>Falta</TableHead>
                <TableHead>Atraso</TableHead>
                <TableHead>Ex50%</TableHead>
                <TableHead>Ex100%</TableHead>
                <TableHead>EN50%</TableHead>
                <TableHead>ExNot</TableHead>
                <TableHead>Not.</TableHead>
                <TableHead>Not. Tot.</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return <PunchTableRow key={i} />;
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
