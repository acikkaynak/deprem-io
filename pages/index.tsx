import YardimAl from "@/components/yardim-al";
import YardimSagla from "@/components/yardim-sagla";
import YardimListeleri from "@/components/yardim-listeleri";
import YardimAraclari from "@/components/yardim-araclari";
import YardimHaritalari from "@/components/yardim-haritalari";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t } = useTranslation("common");
  console.log();
  return (
    <>
      <YardimAl t={t}/>
      <YardimSagla />
      <YardimListeleri />
      <YardimAraclari />
      <YardimHaritalari />
    </>
  );
}
