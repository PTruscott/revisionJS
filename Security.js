var security = [
	{ lecture:"Intro", module:"Security", question:"Computer Security can be simplified as the protection of what?", answer:"Confidentiality, Integrity, and Availability." }

,	{ lecture:"Intro", module:"Security", question:"What does \"Confidentiality\" mean in relation to computer security?", answer:"Preventing attackers from reading data." } 

,	{ lecture:"Intro", module:"Security", question:"What does \"Integrity\" mean in relation to computer security?", answer:"Ensuring incoming data is genuine." } 

,	{ lecture:"Intro", module:"Security", question:"What does \"Availability\" mean in relation to computer security?", answer:"Guaranteeing data is available when you need it." } 

,	{ lecture:"Intro", module:"Security", question:"What is a \"threat model\" or an \"attacker model\"?", answer:"Determining the capabilities of the attacker and what part of your data they're trying to access" } 

,	{ lecture:"Intro", module:"Security", question:"What are the four main groups that may be accessing your data?", answer:"Script Kiddies, Professional Criminal Gangs, Governments, and ISPs." } 

,	{ lecture:"Intro", module:"Security", question:"What are \"Script Kiddies\" in relation to cracking?", answer:"Relatively low skilled hackers using prewritten scripts and known attack methods" } 

,	{ lecture:"Intro", module:"Security", question:"What are \"Professional Criminal Gangs\" in relation to cracking?", answer:"Organisations dedicated to make money via hacking." } 

,	{ lecture:"Intro", module:"Security", question:"What are some of the main attack methods that criminal gangs use?", answer:"Spam-based phishing attacks, DOS attacks, and ransomware." }

,	{ lecture:"Ciphers", module:"Security", question:"What is Kerckhoff's Principle?", answer:"\"A cipher should be secure even if the attacker knows everything about it apart from the key.\"" } 

,	{ lecture:"Ciphers", module:"Security", question:"Why does the Caeser Cipher fail Kerckhoff's Principle?", answer:"The moment you know it's a Caeser Cipher, it is easy to undo via brute force or frequency analysis" } 

,	{ lecture:"Ciphers", module:"Security", question:"What is \"Frequency Analysis\" in relation to Ciphers?", answer:"It counts the number of occurrences of each symbol and attempts to draw conclusions from the data, for example the most common letter is \"e\", so a symbol that occurs a lot might be \"e\"." }

,	{ lecture:"Ciphers", module:"Security", question:"What is a \"One Time Pad\"?", answer:"A randomly generated key which is the same length as the message to be encrypted.  The pad and the message are XOR-ed together to produce the cipher text.  It can be decrypted by just XORing it with the pad again." } 

,	{ lecture:"Ciphers", module:"Security", question:"What are the advantages of a \"One Time Pad\"?", answer:"It allows for flawless encryption and easy decryption if the pads are known by both parties.  Attempting to brute force them will give many legible but incorrect solutions." } 

,	{ lecture:"Ciphers", module:"Security", question:"What are the disadvantages of a \"One Time Pad\"?", answer:"Randomly generating numbers isn't a trivial computational problem, and the pads need to be the same length as the message." } 

,	{ lecture:"Ciphers", module:"Security", question:"What does \"Confusion\" mean in relation to ciphers?", answer:"The each digit of the ciphertext should depend on multiple parts of the key." } 

,	{ lecture:"Ciphers", module:"Security", question:"What does \"Diffusion\" mean in relation to ciphers?", answer:"That if you change one digit in the ciphertext or message (at least) half the message or ciphertext should change respectively." }

,	{ lecture:"Adv Ciphers", module:"Security", question:"What does AES stand for?", answer:"Advanced Encryption Standard" } 

,	{ lecture:"Adv Ciphers", module:"Security", question:"What size is the main key in AES?", answer:"128 bits" } 

,	{ lecture:"Adv Ciphers", module:"Security", question:"What is the use of the \"SubBytes\" step in AES?", answer:"It provides the ciphers non-linearity" } 

,	{ lecture:"Adv Ciphers", module:"Security", question:"Explain the \"SubBytes\" step in AES", answer:"It uses an 8-bit substitution box known as the \"Rijndael S-Box\" to replace every byte in the state." } 

,	{ lecture:"Adv Ciphers", module:"Security", question:"What is the use of the \"ShiftRows\" step in AES?", answer:"It ensures that each column does not end up linearly independent.  Without it you could crack each column by itself, significantly reducing the time needed." }

,	{ lecture:"Adv Ciphers", module:"Security", question:"Explain the \"ShiftRows\" step in AES", answer:"Every row in the state is replaced by an increasing offset.  The first isn't moved, the second by 1, the third by 2, and the fourth and final by 3." } 

,	{ lecture:"Adv Ciphers", module:"Security", question:"What is the use of the \"MixColumns\" step in AES?", answer:"It increases the diffusion of the cipher and drastically increases the time it takes to decrypt." } 

,	{ lecture:"Adv Ciphers", module:"Security", question:"Explain the \"MixColumns\" step in AES", answer:"It carries out a substitution of each column according to a formula you don't need to memorise." }

,	{ lecture:"Adv Ciphers", module:"Security", question:"What does the \"AddRoundKey\" step in AES do?", answer:"It XORS the state with the appropriate 128 Round Key generated from the main key." } 

,	{ lecture:"Adv Ciphers", module:"Security", question:"What are the main steps of AES?", answer:"9 rounds of SubBytes, ShiftRows, MixColumns, and AddRoundKey then a round of all but the MixColumns step." } 

,	{ lecture:"Adv Ciphers", module:"Security", question:"What is \"Padding\" in relation to ciphers?", answer:"If the message or section of message doesn't fill up the block, padding is used to make it the right size." } 

,	{ lecture:"Adv Ciphers", module:"Security", question:"What type of padding is used in relation to ciphers?", answer:"If there is one byte of space, write \"01\", if there are two bytes of space write \"0202\" etc.  If the message goes to the end of the block, add a new block which entirely consists of \"1616...\"" } 

,	{ lecture:"Adv Ciphers", module:"Security", question:"What is \"Electronic Codebook Mode (ECB)\" in relation to ciphers?", answer:"It's when each block of message is encrypted independently and then put back in the same order as the plain text.  This is bad practice as you can see repeating blocks of plain text easily (frequency analysis)." }

,	{ lecture:"Adv Ciphers", module:"Security", question:"What is \"Cipher Block Chaining (CBC)\" in relation to ciphers?", answer:"It's a way to rearrange blocks in encryption to prevent frequency analysis." } 

,	{ lecture:"Adv Ciphers", module:"Security", question:"Explain how \"Cipher Block Chaining (CBC)\" works", answer:"First a random \"Initialisation Vector (IV)\" is generated and added to the front of the encrypted file in plain text.  Then the first block of plaintext is XOR-ed with the IV.  This is then encrypted and forms the first block of cipher text.  The next block of plaintext is then XOR-ed with the previous one and encrypted to form the second block etc..." }

,	{ lecture:"Adv Ciphers", module:"Security", question:"Can the same message be sent twice with CBC?  Why?", answer:"Yes, as the messages look completely different to attackers." } 

,	{ lecture:"Adv Ciphers", module:"Security", question:"What is the advantage of using \"Counter Mode (CTR)\" over CBC?", answer:"It allows for segments of the message to be decrypted without needing to decrypt the whole thing (like in the case of a hard drive)." }

,	{ lecture:"Adv Ciphers", module:"Security", question:"Explain how \"Counter Mode (CTR)\" works.", answer:"First a random \"Initialisation Vector (IV)\" is generated and put on the front of the encrypted file in plain text.  The file and the IV are then XOR-ed together and encrypted to make the first block of cipher text.  The next block is then XOR-ed with the IV+1 and encrypted to make the second block etc...  This also enforces the correct order of the message." } 

,	{ lecture:"security", module:"Security", question:"What is the main principle of public key encryption?", answer:"That there are two keys, one for encryption (public) and one for decryption (private).  You can't get the private key from the public key." } 

,	{ lecture:"security", module:"Security", question:"What is the \"Diffie-Hellman\" protocol?", answer:"It's a widely used key agreement protocol." } 

,	{ lecture:"security", module:"Security", question:"Explain how \"Diffie-Hellman\" works", answer:"Two people, Alice and Bob, agree on two numbers.  The generator \"g\" (often 160 bits long) and the prime \"p\" (often 1024 bits long).  They both then generate two Random numbers Ra and Rb, respectively, and do (g^Rx mod p).  These numbers, Ta and Tb, are sent to each other.  Alice calculates (Tb^Ra) mod p and Bob (tA^rB mod p) to get the same value, (g^(RaRb) mod p) which is then used for Symmetric Key Encryption." } 

,	{ lecture:"security", module:"Security", question:"Why can't \"Diffie-Hellman\" be used to authenticate? ", answer:"When the connection is being established, an attacker can intercept the message and respond to Alice's Ta with their own Tb, hi-jacking the connection without either of them knowing." } 

];