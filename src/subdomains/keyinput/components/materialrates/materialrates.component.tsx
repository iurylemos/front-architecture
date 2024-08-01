"use client";

import { Controller, useFormContext } from "react-hook-form";
import { KeyInputFormData } from "@/subdomains/keyinput/types";

export function KeyInputMaterialRatesComponent(): JSX.Element {
  const {
    control,
    formState: { errors },
  } = useFormContext<KeyInputFormData>();

  return (
    <div className="mb-6">
      <div className="mb-4">
        <label
          htmlFor="aluLME"
          className="block text-sm font-medium text-gray-700"
        >
          Alu LME Rate
        </label>
        <Controller
          name="materialRates.aluLME"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              step="0.01"
              id="aluLME"
              placeholder="aluLME"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.aluLME && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.aluLME.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="aluPremium"
          className="block text-sm font-medium text-gray-700"
        >
          Alu Premium Rate
        </label>
        <Controller
          name="materialRates.aluPremium"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              step="0.01"
              id="aluPremium"
              placeholder="aluPremium"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.aluPremium && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.aluPremium.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="aluMidwestDDU"
          className="block text-sm font-medium text-gray-700"
        >
          Alu Midwest DDU
        </label>
        <Controller
          name="materialRates.aluMidwestDDU"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="aluMidwestDDU"
              placeholder="aluMidwestDDU"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.aluMidwestDDU && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.aluMidwestDDU.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="aluSHFE"
          className="block text-sm font-medium text-gray-700"
        >
          Alu SHFE
        </label>
        <Controller
          name="materialRates.aluSHFE"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="aluSHFE"
              placeholder="aluSHE"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.aluSHFE && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.aluSHFE.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="stampingStockSidePlate"
          className="block text-sm font-medium text-gray-700"
        >
          Stamping Stock Side Plate
        </label>
        <Controller
          name="materialRates.stampingStockSidePlate"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              step="0.01"
              id="stampingStockSidePlate"
              placeholder="stampingStockSidePlate"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.stampingStockSidePlate && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.stampingStockSidePlate.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="stampingStockManifolds"
          className="block text-sm font-medium text-gray-700"
        >
          Stamping Stock Mani Folds
        </label>
        <Controller
          name="materialRates.stampingStockManifolds"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="stampingStockManifolds"
              placeholder="stampingStockManifolds"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.stampingStockManifolds && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.stampingStockManifolds.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="pptv20"
          className="block text-sm font-medium text-gray-700"
        >
          Pptv20
        </label>
        <Controller
          name="materialRates.pptv20"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              step="0.01"
              id="pptv20"
              placeholder="pptv20"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.pptv20 && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.pptv20.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="pptv40"
          className="block text-sm font-medium text-gray-700"
        >
          Pptv40
        </label>
        <Controller
          name="materialRates.pptv40"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              step="0.01"
              id="pptv40"
              placeholder="pptv40"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.pptv40 && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.pptv40.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="pp54Scolefin"
          className="block text-sm font-medium text-gray-700"
        >
          Pp54Scolefin
        </label>
        <Controller
          name="materialRates.pp54Scolefin"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              step="0.01"
              id="pp54Scolefin"
              placeholder="pp54Scolefin"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.pp54Scolefin && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.pp54Scolefin.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="pp54Scolefin"
          className="block text-sm font-medium text-gray-700"
        >
          Pp54Scolefin
        </label>
        <Controller
          name="materialRates.pp54Scolefin"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="number"
              step="0.01"
              id="pp54Scolefin"
              placeholder="pp54Scolefin"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.pp54Scolefin && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.pp54Scolefin.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="ppGf30"
          className="block text-sm font-medium text-gray-700"
        >
          PpGf30
        </label>
        <Controller
          name="materialRates.ppGf30"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="ppGf30"
              placeholder="ppGf30"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.ppGf30 && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.ppGf30.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="pa6Gf30"
          className="block text-sm font-medium text-gray-700"
        >
          Pa6Gf30
        </label>
        <Controller
          name="materialRates.pa6Gf30"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="pa6Gf30"
              placeholder="pa6Gf30"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.pa6Gf30 && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.pa6Gf30.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="pa610"
          className="block text-sm font-medium text-gray-700"
        >
          pa610
        </label>
        <Controller
          name="materialRates.pa610"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="pa610"
              placeholder="pa610"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.pa610 && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.pa610.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="pa66Gf30"
          className="block text-sm font-medium text-gray-700"
        >
          pa66Gf30
        </label>
        <Controller
          name="materialRates.pa66Gf30"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="pa66Gf30"
              placeholder="pa66Gf30"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.pa66Gf30 && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.pa66Gf30.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="pa66Gf35"
          className="block text-sm font-medium text-gray-700"
        >
          pa66Gf35
        </label>
        <Controller
          name="materialRates.pa66Gf35"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="pa66Gf35"
              placeholder="pa66Gf35"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.pa66Gf35 && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.pa66Gf35.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="ppaGf50"
          className="block text-sm font-medium text-gray-700"
        >
          ppaGf50
        </label>
        <Controller
          name="materialRates.ppaGf50"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="ppaGf50"
              placeholder="PPAGF50"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.ppaGf50 && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.ppaGf50.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="abs"
          className="block text-sm font-medium text-gray-700"
        >
          abs
        </label>
        <Controller
          name="materialRates.abs"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="abs"
              placeholder="ABS"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.abs && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.abs.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="pom"
          className="block text-sm font-medium text-gray-700"
        >
          POM
        </label>
        <Controller
          name="materialRates.pom"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="pom"
              placeholder="POM"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.pom && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.pom.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="tpeShore40"
          className="block text-sm font-medium text-gray-700"
        >
          tpeShore40
        </label>
        <Controller
          name="materialRates.tpeShore40"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="tpeShore40"
              placeholder="tpeShore40"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.tpeShore40 && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.tpeShore40.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="tpeShore25"
          className="block text-sm font-medium text-gray-700"
        >
          tpeShore25
        </label>
        <Controller
          name="materialRates.tpeShore25"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="tpeShore25"
              placeholder="materialRates.tpeShore25"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.tpeShore25 && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.tpeShore25.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="molykoteGrease"
          className="block text-sm font-medium text-gray-700"
        >
          molykoteGrease
        </label>
        <Controller
          name="materialRates.molykoteGrease"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="molykoteGrease"
              placeholder="molykoteGrease"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.molykoteGrease && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.molykoteGrease.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="pptv40TpeShore40"
          className="block text-sm font-medium text-gray-700"
        >
          pptv40TpeShore40
        </label>
        <Controller
          name="materialRates.pptv40TpeShore40"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="pptv40TpeShore40"
              placeholder="pptv40TpeShore40"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.pptv40TpeShore40 && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.pptv40TpeShore40.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="ppC3IndexValue"
          className="block text-sm font-medium text-gray-700"
        >
          ppC3IndexValue
        </label>
        <Controller
          name="materialRates.ppC3IndexValue"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="ppC3IndexValue"
              placeholder="ppC3IndexValue"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.materialRates?.ppC3IndexValue && (
          <p className="text-red-500 text-xs mt-1">
            {errors.materialRates.ppC3IndexValue.message}
          </p>
        )}
      </div>
    </div>
  );
}
