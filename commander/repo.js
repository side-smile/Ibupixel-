"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "😂", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/side-smile/Ibupixel-';
  const img = 'https://files.catbox.moe/ccz8ht.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = ` *hello 👋*  *𝑀𝑅 𝐵² - 𝑀𝐷.*\n support our channel *by*,  https://whatsapp.com/channel/0029VbAjawl9MF8vQQa0ZT32

_________● *𝑀𝑅 𝐵² - 𝑀𝐷* ●____________
|💥 *ʀᴇᴘᴏsɪᴛᴏʀʏ:* ${data.html_url}
|🌟 *sᴛᴀʀs:* ${repoInfo.stars}
|🍽 *ғᴏʀᴋs:* ${repoInfo.forks}
|⌚️ *ʀᴇʟᴇᴀsᴇ ᴅᴀᴛᴇ:* ${releaseDate}
|🕐 *ᴜᴘᴅᴀᴛᴇ ᴏɴ:* ${repoInfo.lastUpdate}
|👨‍💻 *ᴏᴡɴᴇʀ:* *𝑀𝑅 𝐵² - 𝑀𝐷*
|💞 *ᴛʜᴇᴍᴇ:* *𝑀𝑅 𝐵² - 𝑀𝐷*
|🥰 *ᴏɴʟʏ ɢᴏᴅ ᴄᴀɴ ᴊᴜᴅɢᴇ ᴍᴇ!👑*
__________________________________
            *ᴍᴀᴅᴇ ᴡɪᴛʜ 𝑀𝑅 𝐵² - 𝑀𝐷*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
