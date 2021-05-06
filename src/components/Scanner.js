import QrReader from "modern-react-qr-reader";
import { Button, Alert, PageHeader } from "antd";
import { useState } from "react";

const Scanner = (props) => {
  const [facingMode, setFacingMode] = useState("user");
  const [result, setResult] = useState();

  const handleScan = (data) => {
    if (data && data !== "") setResult(data);
    //console.log(data);
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <>
      <PageHeader
        onBack={() => props.setScanning(false)}
        title="Scan To Pay"
        style={{ padding: 0 }}
      />

      <Button
        type="link"
        style={{ padding: 0 }}
        onClick={() =>
          setFacingMode(facingMode === "environment" ? "user" : "environment")
        }
      >
        Switch Camera
      </Button>
      <QrReader
        delay={1000}
        style={{
          height: "100%",
          width: "100%",
        }}
        onError={handleError}
        onScan={handleScan}
        facingMode={facingMode}
      />
      {result ? <Alert message={result} type="success" /> : null}
    </>
  );
};

export default Scanner;
