import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchBestEmployeesData, fetchData, IData } from "../../api.ts";
import { MemoBestEmployees } from "../BestEmployees/BestEmployees.tsx";
import { MemoTeam } from "../Team/Team.tsx";
import "./styles.css";

function App() {
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2024);
  const [data, setData] = useState<IData>();

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  const { profit = [], team = [] } = data || {};

  /* Вычисляет доход на количество месяцев (примем, что список profit каждый месяц одинаков) */
  const calculateProfitSum = useMemo(
    () => (month: number) => month * profit.reduce((acc, i) => acc + i, 0),
    [profit]
  );

  const date = `${month}/${year}`;

  const getApi = useCallback(() => fetchBestEmployeesData(year), [year]);

  /* Увеличивает месяц */
  const onIncMonth = () => setMonth((count) => (count === 12 ? 1 : count + 1));

  /* Уменьшает год до 2018го */
  const onDecYear = () =>
    setYear((count) => (count === 2018 ? 2018 : count - 1));

  return (
    <div>
      <h1>App</h1>
      <div className="buttons">
        <button onClick={onIncMonth}>month is {month}</button>
        <button onClick={onDecYear}>year is {year}</button>
      </div>
      <div className="block">
        <p>Date is: {date}</p>
        <p>Profit sum is: {calculateProfitSum(month)} $</p>
      </div>
      <MemoBestEmployees getApi={getApi} />
      <MemoTeam team={team} />
    </div>
  );
}

export default App;
