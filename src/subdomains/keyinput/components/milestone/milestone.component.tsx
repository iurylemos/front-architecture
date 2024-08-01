"use client";

import { Controller, useFormContext } from "react-hook-form";
import { KeyInputFormData } from "@/subdomains/keyinput/types";
import DatePicker from "react-datepicker";

export function KeyInputMilestoneComponent(): JSX.Element {
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
        Milestones
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col">
          <label className="text-sm text-gray-700">AFV</label>
          <Controller
            name="milestones.afv"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.afv
              ? errors.milestones.afv
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">CAAV</label>
          <Controller
            name="milestones.caav"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.caav
              ? errors.milestones.caav
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">CRAR</label>
          <Controller
            name="milestones.crar"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.crar
              ? errors.milestones.crar
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">DESF</label>
          <Controller
            name="milestones.desf"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.desf
              ? errors.milestones.desf
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">EFV</label>
          <Controller
            name="milestones.efv"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.efv
              ? errors.milestones.efv
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">FDPR</label>
          <Controller
            name="milestones.fdpr"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.fdpr
              ? errors.milestones.fdpr
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">FFV</label>
          <Controller
            name="milestones.ffv"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.ffv
              ? errors.milestones.ffv
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">IARV</label>
          <Controller
            name="milestones.iarv"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.iarv
              ? errors.milestones.iarv
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">ISD</label>
          <Controller
            name="milestones.isd"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.isd
              ? errors.milestones.isd
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">ISVA</label>
          <Controller
            name="milestones.isva"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.isva
              ? errors.milestones.isva
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">NPAV</label>
          <Controller
            name="milestones.npav"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.npav
              ? errors.milestones.npav
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">OFTO</label>
          <Controller
            name="milestones.ofto"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.ofto
              ? errors.milestones.ofto
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">OTOP</label>
          <Controller
            name="milestones.otop"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.otop
              ? errors.milestones.otop
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">PRCL</label>
          <Controller
            name="milestones.prcl"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.prcl
              ? errors.milestones.prcl
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">PKRF</label>
          <Controller
            name="milestones.prkf"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.prkf
              ? errors.milestones.prkf
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">REQF</label>
          <Controller
            name="milestones.reqf"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.reqf
              ? errors.milestones.reqf
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">SOCO</label>
          <Controller
            name="milestones.soco"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.soco
              ? errors.milestones.soco
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">SOP</label>
          <Controller
            name="milestones.sop"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.sop
              ? errors.milestones.sop
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">SOPR</label>
          <Controller
            name="milestones.sopr"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.sopr
              ? errors.milestones.sopr
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">SSSR</label>
          <Controller
            name="milestones.sssr"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.sssr
              ? errors.milestones.sssr
              : null
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">TOGO</label>
          <Controller
            name="milestones.togo"
            control={control}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
          />
          {renderError(
            errors?.milestones && errors.milestones.togo
              ? errors.milestones.togo
              : null
          )}
        </div>
      </div>
    </div>
  );
}
