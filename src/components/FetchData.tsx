import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, AlertIcon, Stack } from "@chakra-ui/react";

interface NewData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const FetchData = () => {
  const [data, setData] = useState<NewData[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<NewData[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error && (
        <Stack spacing={3}>
          <Alert status="error">
            <AlertIcon boxSize="19px" mr={4} color="red" />
            {error}
          </Alert>
        </Stack>
      )}
      {!error && (
        <ul>
          {data.map((singleData) => (
            <li key={singleData.id}>{singleData.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FetchData;
