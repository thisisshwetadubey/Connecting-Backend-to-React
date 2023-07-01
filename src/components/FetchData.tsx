import { useEffect, useState } from "react";
import axios from "axios";

interface NewData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const FetchData = () => {
  const [data, setData] = useState<NewData[]>([]);

  useEffect(() => {
    axios
      .get<NewData[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <ul>
        {data.map((singleData) => (
          <li key={singleData.id}>{singleData.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
