(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[47],{1656:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var r={messages:{Accept:"Accepter",Acknowledge:"Anerkende",Allow:"Give lov til","Allow in your wallet":"Tillad i din pung","Allow {0} first":["Tillad ",["0"]," f\xf8rst"],"Allowance pending":"Godtg\xf8relse afventer","An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Der opstod en fejl under fors\xf8g p\xe5 at udf\xf8re denne swap. Det kan v\xe6re n\xf8dvendigt at \xf8ge din glidningstolerance. Hvis det ikke virker, kan der v\xe6re en uforenelighed med det token, du handler. Bem\xe6rk: gebyr ved overf\xf8rsel og rebase-tokens er inkompatibelt med Uniswap V3.","Approval pending":"Godkendelse afventer",Approve:"Godkend","Approve in your wallet":"Godkend i din tegnebog","Approve {0} first":["Godkend ",["0"]," f\xf8rst"],Auto:"Automatisk","Auto Router":"Auto router",Close:"Luk","Confirm in your wallet":"Bekr\xe6ft i din tegnebog","Confirm swap":"Bekr\xe6ft swap","Connect wallet":"Forbind tegnebog","Connect wallet to swap":"Tilslut tegnebogen for at bytte","Connecting\u2026":"Tilslutning\u2026","Convert {0} to {1}":["Konverter ",["0"]," til ",["1"]],"Disconnect wallet":"Afbryd tegnebogen",Dismiss:"Afvis","Enter an amount":"Indtast et bel\xf8b","Error details":"Fejldetaljer","Error fetching trade":"Fejl ved hentning af handel","Fetching best price\u2026":"Bedste pris\u2026",For:"Til","High price impact":"H\xf8j prisp\xe5virkning","High slippage":"H\xf8j glidning","High slippage increases the risk of price movement":"H\xf8j glidning \xf8ger risikoen for prisbev\xe6gelser","I don't have a wallet":"Jeg har ikke en pung","Insufficient liquidity in the pool for your trade":"Utilstr\xe6kkelig likviditet i puljen til din handel","Insufficient {0} balance":["Utilstr\xe6kkelig ",["0"]," saldo"],"Invalid recipient":"Ugyldig modtager","Liquidity provider fee":"Likviditetstilbyder gebyr",Max:"Maks.","Max slippage":"Max glidning","Maximum sent":"Maksimum sendt","Minimum received":"Minimum modtaget","Missing dependencies":"Manglende afh\xe6ngigheder","Mock Toggle":"Mock Toggle","No results found.":"Ingen resultater fundet.","No tokens are available on this network. Please switch to another network.":"Ingen tokens er tilg\xe6ngelige p\xe5 dette netv\xe6rk. Skift venligst til et andet netv\xe6rk.",OFF:"FRA",ON:"TIL","Output is estimated. You will receive at least {0} {1} or the transaction will revert.":["Output er estimeret. Du modtager mindst ",["0"]," ",["1"]," , ellers vil transaktionen vende tilbage."],"Output is estimated. You will send at most {0} {1} or the transaction will revert.":["Output er estimeret. Du sender h\xf8jst ",["0"]," ",["1"]," , ellers vil transaktionen vende tilbage."],"Please enter a valid slippage %":"Indtast venligst en gyldig glidning %","Powered by the Uniswap protocol":"Drevet af Uniswap-protokollen","Price impact":"Prisp\xe5virkning","Price updated":"Pris opdateret","Recent transactions":"Seneste transaktioner","Reload the page":"Genindl\xe6s siden",Reset:"Nulstil","Review swap":"Anmeldelsesbytte","Search by token name or address":"S\xf8g efter symbolnavn eller adresse","Select a token":"V\xe6lg et token",Settings:"Indstillinger","Slippage tolerance":"Glidningstolerance","Something went wrong.":"Noget gik galt.",Swap:"Byt","Swap confirmed":"Bytte bekr\xe6ftet","Swap details":"Byt detaljer","Swap failed: {0}":["Skift mislykkedes: ",["0"]],"Swap pending":"Swap afventer","Swap summary":"Swap oversigt","The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.":"Uniswap-invarianten x * y = k var ikke tilfreds med byttet. Dette betyder normalt, at et af de tokens, du bytter, indeholder brugerdefineret adf\xe6rd ved overf\xf8rsel.","The input token cannot be transferred. There may be an issue with the input token.":"Input-token kan ikke overf\xf8res. Der kan v\xe6re et problem med input-token.","The output token cannot be transferred. There may be an issue with the output token.":"Output-token kan ikke overf\xf8res. Der kan v\xe6re et problem med output-token.","The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Output-token kan ikke overf\xf8res. Der kan v\xe6re et problem med output-token. Bem\xe6rk: gebyr ved overf\xf8rsel og rebase-tokens er inkompatibelt med Uniswap V3.","The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.":"Transaktionen kunne ikke sendes, fordi fristen er udl\xf8bet. Kontroller, at din transaktionsfrist ikke er for lav.","This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Denne transaktion lykkes ikke p\xe5 grund af prisbev\xe6gelse. Pr\xf8v at \xf8ge din glidningstolerance. Bem\xe6rk: gebyr ved overf\xf8rsel og rebase-tokens er inkompatibelt med Uniswap V3.","This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.":"Denne transaktion lykkes ikke p\xe5 grund af prisbev\xe6gelse eller gebyr ved overf\xf8rsel. Pr\xf8v at \xf8ge din glidningstolerance.","Transaction confirmed":"Transaktionen bekr\xe6ftet","Transaction deadline":"Frist for transaktion","Transaction pending":"Transaktion afventer","Transaction rejected.":"Transaktionen blev afvist.","Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Pr\xf8v at \xf8ge din glidningstolerance.<0/>BEM\xc6RK: Gebyr ved overf\xf8rsel og rebase-tokens er inkompatible med Uniswap V3.","Unexpected error. Could not estimate gas for the swap.":"Uforventet fejl. Kunne ikke estimere gas til byttet.","Unexpected issue with estimating the gas. Please try again.":"Uventet problem med estimering af gassen. Pr\xf8v igen.","Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":["Ukendt fejl",["0"],". Pr\xf8v at \xf8ge din glidetolerance. Bem\xe6rk: gebyr ved overf\xf8rsel og rebase -tokens er inkompatibelt med Uniswap V3."],"Unsupported network - switch to another to trade":"Ikke-underst\xf8ttet netv\xe6rk - skift til et andet for at handle","Unwrap confirmed":"Udpakning bekr\xe6ftet","Unwrap pending":"Udpakning afventer","Unwrap {0}":["Pak ",["0"],"ud"],"View on Etherscan":"Se p\xe5 Etherscan","Wrap confirmed":"Indpakning bekr\xe6ftet","Wrap pending":"Indpakning afventer","Wrap {0}":["Indpak ",["0"]],"Your transaction will revert if it has been pending for longer than this period of time.":"Din transaktion vil vende tilbage, hvis den har v\xe6ret afventende i l\xe6ngere tid end denne periode.","Your transaction will revert if the price changes unfavorably by more than this percentage.":"Din transaktion vil blive tilbagef\xf8rt, hvis prisen \xe6ndres ugunstigt med mere end denne procentdel.",minutes:"minutter","{caption}":[["caption"]],"{integrator} fee":[["integrator"]," gebyr"],"{min}m {sec}s":[["min"],"m ",["sec"],"s"],"{sec}s":[["sec"],"s"]}}}}]);
//# sourceMappingURL=47.e44bd222.chunk.js.map