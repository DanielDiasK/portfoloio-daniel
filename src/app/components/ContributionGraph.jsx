import { getContributions } from "@/lib/github";

const LEVEL_COLORS = [
    "bg-neutral/15 dark:bg-neutral/20",
    "bg-green-300 dark:bg-green-800",
    "bg-green-500 dark:bg-green-600",
    "bg-green-600 dark:bg-green-500",
    "bg-green-700 dark:bg-green-400",
];

export default async function ContributionGraph() {
    const data = await getContributions();
    if (!data) return null;
    const { days, total } = data;

    const sortedDays = [...days].sort((a, b) => b.level - a.level);
    const weekCount = Math.ceil(sortedDays.length / 7);

    return (
        <div className="mt-10 scroll-mt-14" id="contributions">
            <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                Contribuições
            </h2>
            <p className="mt-1 text-sm text-base-content/80">
                {total} contribuições no último ano
            </p>
            <div className="mt-3 overflow-x-auto pb-2">
                <div
                    className="grid grid-flow-col grid-rows-7 gap-[3px] w-max"
                    aria-hidden="true"
                >
                    {sortedDays.map((day, index) => (
                        <div
                            key={index}
                            title={day.date}
                            className={`w-[11px] h-[11px] rounded-[2px] ${LEVEL_COLORS[day.level]}`}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs text-base-content/60">
                <span>Menos</span>
                {LEVEL_COLORS.map((color, idx) => (
                    <div
                        key={idx}
                        className={`w-[11px] h-[11px] rounded-[2px] ${color}`}
                    />
                ))}
                <span>Mais</span>
            </div>
        </div>
    );
}
