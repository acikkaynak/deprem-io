import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Alert from "@/components/alert";
import CustomLink from "@/components/custom-link";
import Icon, { Icons } from "@/components/icon";
import BackButton from './../components/back-button';
import InputWrapper from "@/components/form/input-wrapper";
import FormManager from "@/components/form/form-manager";
import FormControl from "@/components/form/form-control";

enum PhysicalState {
  Kritik = "Kritik",
  Orta = "Orta",
  Normal = "Normal",
}

export default function YardimIstekEnkaz() {
  const validationSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().nullable().email(),
    humanCount: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? undefined : value))
      .nullable()
      .moreThan(0),
    address: yup.string().required(),
    addressDetail: yup.string().nullable(),
    physicalCondition: yup.string().required(),
    physicalConditionDetail: yup.string().required(),
    tweetUrl: yup.string().nullable(),
    term: yup.bool().required(),
  });

  const defaultValues = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    addressDetail: "",
    humanCount: "",
    physicalCondition: PhysicalState.Orta,
    physicalConditionDetail: "",
    tweetUrl: "",
    term: false,
  };

  const { t } = useTranslation("common");

  const onFormSubmit = async (values: object) => {
    console.log(values);
  };

  return (
    <div className="mx-auto max-w-screen-sm">
      <BackButton/>

      <h1>Ben / Tandığım Enkaz Altında</h1>

      <div className="my-6">
        <Alert>
          <p>{t("warningMessages.requestForHelpAgain")}</p>
          <p>
            <CustomLink href="/yardim-list-enkaz">Mevcut Kayıtlar</CustomLink>{" "}
            sayfasına göz atın.
          </p>
        </Alert>
      </div>

      <FormManager
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
        onError={(err) => {
          console.error("onError - err", err);
        }}
        defaultValues={defaultValues}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="fullName"
              icon="user"
              fieldProps={{ placeholder: "Ad Soyad", type: "text" }}
            />
          </div>
          <FormControl
            fieldName="TextInput"
            name="email"
            icon="email"
            fieldProps={{ placeholder: "Email", type: "email" }}
          />
          <FormControl
            fieldName="TextInput"
            name="phone"
            icon="phone"
            fieldProps={{ placeholder: "Telefon", type: "tel" }}
          />
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="humanCount"
              icon="userPlus"
              fieldProps={{
                placeholder: "Kişi Sayısı",
                type: "number",
                min: 1,
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextArea"
              name="address"
              icon="pin"
              className="max-h-32 w-full"
              fieldProps={{
                placeholder: "Adres",
                rows: 2,
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextArea"
              name="addressDetail"
              icon="addressExtra"
              className="max-h-32 w-full"
              fieldProps={{
                placeholder: "Adres Tarifi",
                rows: 1,
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="Radio"
              name="physicalCondition"
              radioLabels={[
                PhysicalState.Normal,
                PhysicalState.Orta,
                PhysicalState.Kritik,
              ]}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextArea"
              name="physicalConditionDetail"
              icon="info"
              className="max-h-32 w-full"
              fieldProps={{
                placeholder: "Fiziki Durum Hakkında Bilgi",
                rows: 2,
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="tweetUrl"
              icon="link"
              fieldProps={{ placeholder: "Tweet Linki", type: "url" }}
            />
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs">
              <Trans
                i18nKey="common:kvkk"
                components={[<CustomLink key="kvkk" href="/hukuki-kvkk" />]}
              />
            </p>
            <div className="mt-4">
              <FormControl
                fieldName="CheckBox"
                name="term"
                label="Okudum ve aydınlandım."
              />
            </div>
          </div>
          <div>
            <FormControl
              fieldName="Button"
              name="enkaz-form-submit"
              label={t("submit")}
              fieldProps={{ type: "submit" }}
            />
          </div>
        </div>
      </FormManager>
    </div>
  );
}
