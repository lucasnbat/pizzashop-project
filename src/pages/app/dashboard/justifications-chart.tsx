import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts";
import colors from "tailwindcss/colors";

const data = [
  { month: "01/2024", justifications: 2 },
  { month: "02/2024", justifications: 4 },
  { month: "03/2024", justifications: 3 },
  { month: "04/2024", justifications: 10 },
  { month: "05/2024", justifications: 2 },
  { month: "06/2024", justifications: 9 },
  { month: "07/2024", justifications: 12 },
  { month: "08/2024", justifications: 2 },
  { month: "09/2024", justifications: 5 },
  { month: "10/2024", justifications: 8 },
  { month: "11/2024", justifications: 4 },
  { month: "12/2024", justifications: 10 },
];

export default function JustificationsChart() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Justificativas no período
          </CardTitle>
          <CardDescription>Número anual de justificativas</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="month" tickLine={false} axisLine={false} dy={16} />
            <YAxis stroke="#888" axisLine={false} tickLine={false} />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="justifications"
              stroke={colors["green"]["400"]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
