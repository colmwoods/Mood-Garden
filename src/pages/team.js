// /src/pages/team.js

export function renderTeamPage() {
    const container = document.getElementById("page-team");
    if (!container) return;

    container.innerHTML = `
        <div class="flex flex-col gap-6">
            
            <div>
                <h2 class="text-xl font-semibold">🌿 Meet the Mood Garden Team</h2>
                <p class="text-sm text-white/60 mt-1">
                    The people behind the project
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                ${teamCard(
        "colm.jpg",
        "Colm Woods",
        "https://github.com/colmwoods",
        "https://linkedin.com/in/colm-woods"
    )}

                ${teamCard(
        "aisha.jpg",
        "Aisha",
        "https://github.com/Aishieee",
        "https://www.linkedin.com/in/aishasheikh2k1/"
    )}

                ${teamCard(
        "akashebaev-ux.jpg",
        "Azamat Kashebayev",
        "https://github.com/akashebaev-ux",
        "https://www.linkedin.com/in/azamat-kashebayev/"
    )}

                ${teamCard(
        "barkode.jpg",
        "Kostiantyn Krysenko",
        "https://github.com/barkode",
        "https://www.linkedin.com/in/kostiantyn-krysenko/"
    )}

                ${teamCard(
        "11florin.jpg",
        "Florin Albu",
        "https://github.com/11florin",
        "https://www.linkedin.com/in/florin-albu-0750b6238/"
    )}

            </div>
        </div>
    `;
}

function teamCard(image, name, github, linkedin) {
    return `
        <div class="rounded-2xl bg-white/10 p-6 text-center hover:bg-white/20 transition">
            
            <img 
                src="/images/${image}" 
                alt="${name}" 
                class="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            >

            <h3 class="font-semibold mb-3">${name}</h3>

            <div class="flex justify-center gap-6 text-2xl">
                <a href="${github}" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github hover:text-yellow-400 transition"></i>
                </a>

                <a href="${linkedin}" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin hover:text-yellow-400 transition"></i>
                </a>
            </div>

        </div>
    `;
}