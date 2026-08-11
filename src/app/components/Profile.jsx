import { socials } from "@/data/data";
import { about } from "@/data/data";
import CopyButton from "./CopyButton";

export default function Profile() {
    return (
        <>
            <img
                src="/foto.jpg"
                className="w-[70px] h-[70px] rounded-[50%] object-cover object-center"
                alt={`${about.name}'s profile`}
            />
            <div className="flex gap-[5px] items-center mt-1">
                <h1 className="text-2xl font-semibold">{about.name}</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                >
                    <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                </svg>
            </div>
            <div className="mt-1.5 flex items-center gap-1">
                <p className="text-base text-base-content/60">{about.role} // </p>
                <p className="text-base-content/90">☕</p>
            </div>
            <div className="flex items-center mt-3 gap-3">
                <a href={socials.github}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github-icon lucide-github cursor-pointer"
                    >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                </a>

                <a href={socials.whatsapp}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="cursor-pointer"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                </a>
            </div>
            <div className="mt-4 flex flex-col gap-1 text-sm">
                <p className="text-base-content/60">
                    Idade: <span className="text-base-content/90">19</span>
                </p>
                <p className="text-base-content/60 flex items-center gap-2">
                    <span>Celular:</span>
                    <a
                        href={socials.whatsapp}
                        className="text-base-content/90 hover:underline"
                    >
                        (17) 98832-6991
                    </a>
                    <CopyButton value="17988326991" />
                </p>
                <p className="text-base-content/60 flex items-center gap-2">
                    <span>Email:</span>
                    <a
                        href={`mailto:${about.email}`}
                        className="text-base-content/90 hover:underline"
                    >
                        danieldiasof@gmail.com
                    </a>
                    <CopyButton value="danieldiasof@gmail.com" />
                </p>
            </div>
        </>
    );
}
