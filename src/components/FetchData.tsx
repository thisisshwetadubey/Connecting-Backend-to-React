import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import { Alert, AlertIcon, Spinner, Stack } from "@chakra-ui/react";

interface NewData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const FetchData = () => {
  const [data, setData] = useState<NewData[]>([]);
  const [error, setError] = useState("");
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoader(true);
    axios
      .get<NewData[]>("https://jsonplaceholder.typicode.com/todos", {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data);
        setLoader(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoader(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {isLoader && <div className="spinner-border"></div>}
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
