import React from "react";
import { Controller, useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { cx } from "@/lib/utils";
import Alert from "@/components/alert";
import CustomLink from "@/components/custom-link";
import InputWrapper from "@/components/input-wrapper";
import Icon, { Icons } from "@/components/icon";
import BackButton from './../components/back-button';


enum PhysicalState {
  Kritik = "Kritik",
  Orta = "Orta",
  Normal = "Normal",
}

export default function YardimIstekEnkaz() {
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

  const { handleSubmit, control, formState } = useForm({
    defaultValues,
  });

  const onFormSubmit = async (values: object) => {
    console.log(values);
  };

  return (
    <div className="mx-auto max-w-screen-sm">
      <BackButton/>

      <h1>Ben / Tandığım Enkaz Altında</h1>

      <div className="my-6">
        <Alert>
          <p>{t("common:warningMessages.requestForHelpAgain")}</p>
          <p>
            <CustomLink href="/yardim-list-enkaz">Mevcut Kayıtlar</CustomLink>{" "}
            sayfasına göz atın.
          </p>
        </Alert>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Controller
              name="fullName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputWrapper icon={Icons.User}>
                  <input type="text" placeholder="Ad Soyad" {...field} />
                </InputWrapper>
              )}
            />
          </div>

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputWrapper icon={Icons.Email}>
                <input type="email" placeholder="Email" {...field} />
              </InputWrapper>
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <InputWrapper icon={Icons.Phone}>
                <input type="tel" placeholder="Telefon" {...field} />
              </InputWrapper>
            )}
          />

          <div className="sm:col-span-2">
            <Controller
              name="humanCount"
              control={control}
              render={({ field }) => (
                <InputWrapper icon={Icons.UserPlus}>
                  <input type="number" placeholder="Kişi Sayısı" {...field} />
                </InputWrapper>
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <Controller
              name="address"
              rules={{ required: true }}
              control={control}
              render={({ field }) => (
                <InputWrapper icon={Icons.Pin}>
                  <textarea
                    className="max-h-32 w-full"
                    rows={2}
                    placeholder="Adres"
                    {...field}
                  />
                </InputWrapper>
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <Controller
              name="addressDetail"
              control={control}
              render={({ field }) => (
                <InputWrapper icon={Icons.AddressExtra}>
                  <textarea
                    className="max-h-32 w-full"
                    rows={1}
                    placeholder="Adres Tarifi"
                    {...field}
                  />
                </InputWrapper>
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <Controller
              name="physicalCondition"
              control={control}
              render={({ field: { value, ...props } }) => (
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      value={PhysicalState.Normal}
                      checked={PhysicalState.Normal === value}
                      {...props}
                    />
                    <span>{PhysicalState.Normal}</span>
                  </label>

                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      value={PhysicalState.Orta}
                      checked={PhysicalState.Orta === value}
                      {...props}
                    />
                    <span>{PhysicalState.Orta}</span>
                  </label>

                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      value={PhysicalState.Kritik}
                      checked={PhysicalState.Kritik === value}
                      {...props}
                    />
                    <span>{PhysicalState.Kritik}</span>
                  </label>
                </div>
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <Controller
              name="physicalConditionDetail"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputWrapper icon={Icons.Info}>
                  <textarea
                    className="max-h-32 w-full"
                    rows={2}
                    placeholder="Fiziki Durum Hakkında Bilgi"
                    {...field}
                  />
                </InputWrapper>
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <Controller
              name="tweetUrl"
              control={control}
              render={({ field }) => (
                <InputWrapper icon={Icons.Link}>
                  <input type="url" placeholder="Tweet Linki" {...field} />
                </InputWrapper>
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <p className="text-xs">
              6698 sayılı KVKK kapsamında “Uygulamamıza depremzede ya da
              depremzede yakını olarak kaydolan kullanıcılardan ad, soyadı,
              iletişim bilgisi, log kaydı ve depremzedenin sisteme girilen ve
              kendileri tarafından alenileştirilmiş konum verilerini
              topluyoruz.” Veri işleme hukuki sebeplerimizi, amaçlarımızı görmek
              ve haklarınızı öğrenmek için{" "}
              <CustomLink href="/hukuki-kvkk">Aydınlatma Metnini</CustomLink>{" "}
              ziyaret etmek ister misiniz?
            </p>

            <div className="mt-4">
              <Controller
                name="term"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, ...props } }) => (
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={value} {...props} />
                    <span>Okudum ve aydınlandım.</span>
                  </label>
                )}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={cx(!formState.isValid && "opacity-50")}
            >
              Gönder
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
