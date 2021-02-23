import { Root, Head, Body ,Container, Title} from "./styled";
import React, { useState } from 'react';
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

const items = [
  {
    src: '../../images/carousel1.png',
  },
  {
    src: '../../images/carousel2.png',
  },
];

function Graphs() {
  const chartsQty = 9 * (550 + 50);

  return (
    <Root>
      <Head>Estatísticas</Head>
      <Body>
        <Container style={{width:`${chartsQty}px`}}>
        <BarChart
            width={550}
            height={250}
            data={data}
            margin={{
              top: 20,
              right: 40,
              left: 30,
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
          <BarChart
            width={550}
            height={250}
            data={data}
            margin={{
              top: 20,
              right: 40,
              left: 30,
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
        <BarChart
          width={550}
          height={250}
          data={data}
            margin={{
              top: 20,
              right: 40,
              left: 30,
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
        <BarChart
            width={550}
            height={250}
            data={data}
            margin={{
              top: 20,
              right: 40,
              left: 30,
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
          <BarChart
            width={550}
            height={250}
            data={data}
            margin={{
              top: 20,
              right: 40,
              left: 30,
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
        <BarChart
          width={550}
          height={250}
          data={data}
            margin={{
              top: 20,
              right: 40,
              left: 30,
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
        <BarChart
            width={550}
            height={250}
            data={data}
            margin={{
              top: 20,
              right: 40,
              left: 30,
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
          <BarChart
            width={550}
            height={250}
            data={data}
            margin={{
              top: 20,
              right: 40,
              left: 30,
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
        <BarChart
          width={550}
          height={250}
          data={data}
            margin={{
              top: 20,
              right: 40,
              left: 30,
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

        </Container>
      </Body>
    </Root>
  );
}
export default Graphs;

const data = [
  {
    name: "Jan",
    Alimentação: 15.0,
    Entretenimento: 15.0,
    Compras: 15.0,
  },
  {
    name: "Fev",
    Alimentação: 35.0,
    Entretenimento: 12.0,
    Compras: 98.99,
  },
  {
    name: "Mar",
    Alimentação: 43.52,
    Entretenimento: 56.93,
    Compras: 90.0,
  },
  {
    name: "Abr",
    Alimentação: 54.0,
    Entretenimento: 29.99,
    Compras: 79.9,
  },
  {
    name: "Mai",
    Alimentação: 15.0,
    Entretenimento: 15.0,
    Compras: 15.0,
  },
  {
    name: "Jun",
    Alimentação: 35.0,
    Entretenimento: 12.0,
    Compras: 98.99,
  },
  {
    name: "Jul",
    Alimentação: 43.52,
    Entretenimento: 56.93,
    Compras: 90.0,
  },
  {
    name: "Ago",
    Alimentação: 54.0,
    Entretenimento: 29.99,
    Compras: 79.9,
  },
  {
    name: "Set",
    Alimentação: 15.0,
    Entretenimento: 15.0,
    Compras: 15.0,
  },
  {
    name: "Out",
    Alimentação: 35.0,
    Entretenimento: 12.0,
    Compras: 98.99,
  },
  {
    name: "Nov",
    Alimentação: 43.52,
    Entretenimento: 56.93,
    Compras: 90.0,
  },
  {
    name: "Dez",
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
