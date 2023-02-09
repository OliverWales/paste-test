import Table from "./Table";

const Preview = ({ type, data }: { type: string; data: string }) => {
  switch (type) {
    case "text/csv":
    case "text/comma-separated-values": {
      const rows = data
        .split("\n")
        .map((row) => row.split(",").map((cell) => cell.trim()));
      return <Table rows={rows} />;
    }
    case "text/tsv":
    case "text/tab-separated-values": {
      const rows = data
        .split("\n")
        .map((row) => row.split("\t").map((cell) => cell.trim()));
      return <Table rows={rows} />;
    }
  }

  return (
    <div className="max-w-full font-mono whitespace-pre-wrap break-all">
      {data}
    </div>
  );
};
export default Preview;
