export const GITHUB_USER = "DanielDiasK";

export async function getContributions() {
    try {
        const res = await fetch(
            `https://github.com/users/${GITHUB_USER}/contributions`,
            {
                headers: { "User-Agent": "portfolio" },
                next: { revalidate: 86400 },
            }
        );
        if (!res.ok) return null;
        const html = await res.text();
        const rows = [];
        const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
        let rowMatch;
        while ((rowMatch = rowRegex.exec(html)) !== null) {
            const rowHtml = rowMatch[1];
            if (!rowHtml.includes("ContributionCalendar-day")) continue;
            const days = [];
            const tdRegex = /data-date="([^"]+)"[^>]*data-level="([0-4])"/g;
            let td;
            while ((td = tdRegex.exec(rowHtml)) !== null) {
                days.push({
                    date: td[1],
                    level: parseInt(td[2], 10),
                });
            }
            if (days.length) rows.push(days);
        }
        if (rows.length === 0) return null;
        const weekCount = Math.max(...rows.map((r) => r.length));
        const days = [];
        for (let w = 0; w < weekCount; w++) {
            for (let d = 0; d < 7; d++) {
                const day = rows[d]?.[w];
                if (day) days.push(day);
            }
        }
        const totalMatch = /(\d+)\s*contributions/.exec(html);
        return {
            days,
            total: totalMatch ? parseInt(totalMatch[1], 10) : 0,
        };
    } catch {
        return null;
    }
}
