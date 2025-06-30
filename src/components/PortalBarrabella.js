import { useState } from "react";

export default function PortalBarrabella() {
  const [dados, setDados] = useState([
    { ap: "101", valor: 8750, tipo: "Mensal", limpeza: 150, luz: 100, gas: 130, internet: 80 },
    { ap: "102", valor: 15000, tipo: "Temporada", limpeza: 150, luz: 120, gas: 130, internet: 80 },
    { ap: "107", valor: 15000, tipo: "Mensal", limpeza: 150, luz: 100, gas: 130, internet: 80 },
    { ap: "118", valor: 15500, tipo: "Mensal", limpeza: 150, luz: 120, gas: 130, internet: 80 },
    { ap: "109", valor: 10500, tipo: "Temporada", limpeza: 150, luz: 100, gas: 130, internet: 80 },
  ]);

  const receita = dados.reduce((acc, curr) => acc + curr.valor, 0);
  const despesas = dados.reduce((acc, curr) => acc + curr.limpeza + curr.luz + curr.gas + curr.internet, 0);
  const saldo = receita - despesas;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">PORTAL BARRABELLA</h1>
        <button className="text-sm underline">Logout</button>
      </header>

      <main className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-100 p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-500">Receita</p>
            <p className="text-xl font-bold">R$ {receita.toLocaleString()}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-500">Despesas</p>
            <p className="text-xl font-bold">R$ {despesas.toLocaleString()}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow text-center">
            <p className="text-sm text-gray-500">Saldo</p>
            <p className="text-xl font-bold">R$ {saldo.toLocaleString()}</p>
          </div>
        </div>

        <table className="w-full table-auto border-collapse mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Apartamento</th>
              <th className="border p-2">Valor Pago</th>
              <th className="border p-2">Tipo</th>
              <th className="border p-2">Limpeza</th>
              <th className="border p-2">Luz</th>
              <th className="border p-2">Gás</th>
              <th className="border p-2">Internet</th>
              <th className="border p-2">Resultado</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => {
              const resultado = item.valor - (item.limpeza + item.luz + item.gas + item.internet);
              return (
                <tr key={index} className="text-center">
                  <td className="border p-2">{item.ap}</td>
                  <td className="border p-2">R$ {item.valor.toLocaleString()}</td>
                  <td className="border p-2">{item.tipo}</td>
                  <td className="border p-2">R$ {item.limpeza}</td>
                  <td className="border p-2">{item.luz}</td>
                  <td className="border p-2">{item.gas}</td>
                  <td className="border p-2">R$ {item.internet}</td>
                  <td className="border p-2">R$ {resultado.toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg">Cadastrar Nova Despesa</button>
      </main>
    </div>
  );
}
