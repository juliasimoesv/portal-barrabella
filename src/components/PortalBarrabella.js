import { useState } from "react";

export default function PortalBarrabella() {
  const [despesas, setDespesas] = useState([
    {
      tipo: "Taxa de limpeza",
      valor: "120",
      data: "2025-06-15",
      observacao: "Referente à saída do hóspede João",
      comprovante: "comprovante1.pdf",
    },
    {
      tipo: "Luz",
      valor: "98.70",
      data: "2025-06-12",
      observacao: "Conta Enel – junho",
      comprovante: "comprovante2.pdf",
    },
  ]);

  const [form, setForm] = useState({ tipo: "", valor: "", data: "", observacao: "", comprovante: null });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const adicionarDespesa = () => {
    if (!form.tipo || !form.valor || !form.data) return;
    const novaDespesa = { ...form, comprovante: form.comprovante?.name || "" };
    setDespesas([...despesas, novaDespesa]);
    setForm({ tipo: "", valor: "", data: "", observacao: "", comprovante: null });
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1>Despesas Detalhadas</h1>
      <p>Apartamento 1203 – Junho de 2025</p>

      <table style={{ width: '100%', marginBottom: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Tipo de Despesa</th>
            <th>Valor (R$)</th>
            <th>Data</th>
            <th>Observação</th>
            <th>Comprovante</th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((item, index) => (
            <tr key={index}>
              <td>{item.tipo}</td>
              <td>R$ {item.valor}</td>
              <td>{item.data}</td>
              <td>{item.observacao}</td>
              <td><a href="#" style={{ color: 'blue' }}>Ver</a></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Cadastrar Nova Despesa</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <input name="tipo" value={form.tipo} onChange={handleInputChange} placeholder="Tipo de Despesa" />
        <input name="valor" value={form.valor} onChange={handleInputChange} type="number" placeholder="Valor" />
        <input name="data" value={form.data} onChange={handleInputChange} type="date" />
        <input name="observacao" value={form.observacao} onChange={handleInputChange} placeholder="Observação" />
        <input name="comprovante" type="file" onChange={handleInputChange} />
      </div>
      <button onClick={adicionarDespesa} style={{ marginTop: '10px' }}>Adicionar</button>
    </div>
  );
}
