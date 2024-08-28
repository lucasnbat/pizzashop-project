import { Helmet } from "react-helmet-async";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import PunchTableRow from "./punch-table-row";
import PunchTableFilter from "./punch-table-filter";
import { Pagination } from "../../../components/pagination";

export function Punches() {
  return (
    <>
      <Helmet title="Batidas" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Batidas</h1>

        <div className="space-y-2.5">
          <PunchTableFilter />

          <div className="rounded-medium border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
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
                  <TableHead></TableHead>
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

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  );
}
