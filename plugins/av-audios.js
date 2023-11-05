let handler = m => m
handler.all = async function (m) {
    
  if (/^.menu$/i.test(m.text) ) {
    let av = './src/mp3/menu.mp3'
    this.sendPresenceUpdate('recording', m.chat);
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (!!message.mention && message.mention[0] == '917736129238@s.whatsapp.net') {
  await message.client.sendMessage(message.jid, fs.readFileSync('./src/mp3/itstaurus.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
 }
    
  if (/^bgm$/i.test(m.text) ) {
    let av = './src/mp3/bgm.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^love$/i.test(m.text) ) {
    let av = './src/mp3/love.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^lallu$/i.test(m.text) ) {
    let av = './src/mp3/Lallu.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
  }

  if (/^welcome$/i.test(m.text) ) {
    let av = './src/mp3/welcome.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
  }

  if (/^.alive$/i.test(m.text) ) {
    let av = './src/mp3/.alive.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   } 
    
return !0
 }
 
export default handler
