"use client";

import { useRouter } from "next/navigation";

export function SharedHeaderComponent(): JSX.Element {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 rounded-lg m-4">
      <div className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
        <div>
          <button
            type="button"
            className="bg-transparent border-none p-0"
            onClick={() => router.push("/")}
          >
            <h5 className="mr-3 font-semibold dark:text-white">
              CAA Smart System
            </h5>
          </button>
          <p className="text-gray-500 dark:text-gray-400">
            Manage all your existing users or add a new one
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          onClick={() => router.push("/users")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 mr-2 -ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
          </svg>
          Users
        </button>
      </div>
    </div>
  );
}