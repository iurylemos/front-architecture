import { Controller, useFormContext } from "react-hook-form";
import { KeyInputFormData } from "@/subdomains/keyinput/types";

export function KeyInputCurrencyRatesComponent(): JSX.Element {
  const {
    control,
    formState: { errors },
  } = useFormContext<KeyInputFormData>();

  const renderError = (error: any): JSX.Element =>
    error ? (
      <p className="text-red-500 text-xs mt-1">{error.message}</p>
    ) : (
      <></>
    );

  return (
    <div className="py-6">
      <label className="block text-lg font-medium text-gray-700">
        Currency Rates
      </label>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col">
          <label className="text-sm text-gray-700">USD</label>
          <Controller
            name="currencyRates.usd"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="USD"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.usd)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">CNY</label>
          <Controller
            name="currencyRates.cny"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="CNY"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.cny)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">THB</label>
          <Controller
            name="currencyRates.thb"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="THB"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.thb)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">INR</label>
          <Controller
            name="currencyRates.inr"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="INR"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.inr)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">PLN</label>
          <Controller
            name="currencyRates.pln"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="PLN"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.pln)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">JPY</label>
          <Controller
            name="currencyRates.jpy"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="JPY"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.jpy)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">BRL</label>
          <Controller
            name="currencyRates.brl"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="BRL"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.brl)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">RUB</label>
          <Controller
            name="currencyRates.rub"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="RUB"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.rub)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">CZK</label>
          <Controller
            name="currencyRates.czk"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="CZK"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.czk)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">TRY</label>
          <Controller
            name="currencyRates.try"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="TRY"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.try)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">MRD</label>
          <Controller
            name="currencyRates.mrd"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="MRD"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.mrd)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">EUR</label>
          <Controller
            name="currencyRates.eur"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="EUR"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.eur)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">KRW</label>
          <Controller
            name="currencyRates.krw"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="KRW"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.krw)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">RON</label>
          <Controller
            name="currencyRates.ron"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="RON"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.ron)}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">ZAR</label>
          <Controller
            name="currencyRates.zar"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="ZAR"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={
                  field.value === null || field.value === undefined
                    ? ""
                    : field.value.toString()
                }
              />
            )}
          />
          {renderError(errors?.currencyRates?.zar)}
        </div>

        {/* Add more currency rate fields following the same structure */}
      </div>
    </div>
  );
}
