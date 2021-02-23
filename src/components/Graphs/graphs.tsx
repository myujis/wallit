import { Root, Head, Body } from "./styled";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Graphs() {
  return (
    <Root>
      <Head>Estatísticas</Head>
      <Body>
        <BarChart
          width={500}
          height={250}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Alimentação"
            stackId="a"
            fill="#38e86a"
            maxBarSize={25}
          />
          <Bar
            dataKey="Entretenimento"
            stackId="a"
            fill="#975edb"
            maxBarSize={25}
          />
          <Bar dataKey="Compras" stackId="a" fill="#3956a5" maxBarSize={25} />
        </BarChart>
      </Body>
    </Root>
  );
}
export default Graphs;

const data = [
  {
    name: "Janeiro",
    Alimentação: 15.0,
    Entretenimento: 15.0,
    Compras: 15.0,
  },
  {
    name: "Fevereiro",
    Alimentação: 35.0,
    Entretenimento: 12.0,
    Compras: 98.99,
  },
  {
    name: "Março",
    Alimentação: 43.52,
    Entretenimento: 56.93,
    Compras: 90.0,
  },
  {
    name: "Abril",
    Alimentação: 54.0,
    Entretenimento: 29.99,
    Compras: 79.9,
  },
];

const Alimentação = [
  { x: "Jan", y: 15.0 },
  { x: "Fev", y: 20.0 },
  { x: "Mar", y: 30.0 },
  { x: "Abr", y: 25.0 },
  { x: "Mai", y: 12.0 },
  { x: "Jun", y: 14.0 },
  { x: "Jul", y: 18.0 },
  { x: "Ago", y: 15.0 },
  { x: "Set", y: 45.0 },
  { x: "Out", y: 70.0 },
  { x: "Nov", y: 55.0 },
  { x: "Dez", y: 32.0 },
];

const Entretenimento = [
  { x: "Jan", y: 15.0 },
  { x: "Fev", y: 20.0 },
  { x: "Mar", y: 30.0 },
  { x: "Abr", y: 25.0 },
  { x: "Mai", y: 12.0 },
  { x: "Jun", y: 14.0 },
  { x: "Jul", y: 18.0 },
  { x: "Ago", y: 15.0 },
  { x: "Set", y: 45.0 },
  { x: "Out", y: 70.0 },
  { x: "Nov", y: 55.0 },
  { x: "Dez", y: 32.0 },
];

const Compras = [
  { x: "Jan", y: 55.0 },
  { x: "Fev", y: 0.0 },
  { x: "Mar", y: 54.0 },
  { x: "Abr", y: 70.0 },
  { x: "Mai", y: 90.0 },
  { x: "Jun", y: 120.0 },
  { x: "Jul", y: 40.0 },
  { x: "Ago", y: 32.0 },
  { x: "Set", y: 55.0 },
  { x: "Out", y: 64.0 },
  { x: "Nov", y: 69.99 },
  { x: "Dez", y: 32.0 },
];
