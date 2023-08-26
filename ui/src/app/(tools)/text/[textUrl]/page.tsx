import { getData } from "@/strapi/Text/getTextData";
import EditText from "@/components/layout/EditText";
import { textProps } from "@/lib/types/textProp";
import React, { FC } from "react";
import { Merriweather } from "next/font/google";

interface pageProps {
  params: {
    textUrl: string;
  };
}

const TextRead: FC<pageProps> = async ({ params }) => {
  const data: textProps | null = await getData(params.textUrl);

  return (
    <div>
      {data === null ? (
        <h1>Loading</h1>
      ) : (
        <div className="space-y-10 items-center">
          <EditText data={data} />
        </div>
      )}
    </div>
  );
};

export default TextRead;
