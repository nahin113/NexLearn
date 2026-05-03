"use client";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateProfilePage = () => {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: session?.user?.name,
      Photo_URL: session?.user?.image,
    },
  });

  console.log(errors)

  const handleUpdateFunc = async (data) => {
    const { name, Photo_URL } = data;

    const { data: res, error } = await authClient.updateUser({
      name: name,
      image: Photo_URL,
    });

    if (res) {
      toast.success("Profile Updated Successfully");
      redirect("/profile");
    }
    if (error) toast.error(error.message);
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-base-200">
      <div className="p-10 rounded-xl bg-white shadow-xl">
        <h2 className="font-bold text-center text-3xl mb-6">
          Update Your Information
        </h2>

        <form onSubmit={handleSubmit(handleUpdateFunc)}>
          <fieldset className="fieldset rounded-box w-xs">
            <label className="label">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name field is required" })}
              className="input input-bordered"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <label className="label">Photo URL</label>
            <input
              type="text"
              {...register("Photo_URL", {
                required: "Photo URL field is required",
              })}
              className="input input-bordered"
              placeholder="Photo URL"
            />
            {errors.Photo_URL && (
              <p className="text-red-500 text-sm">{errors.Photo_URL.message}</p>
            )}

            <div className="mt-6 flex flex-col gap-2">
              <button className="btn btn-neutral">Update Information</button>
              <button
                type="button"
                onClick={() => router.back()}
                className="btn btn-ghost"
              >
                Cancel
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
