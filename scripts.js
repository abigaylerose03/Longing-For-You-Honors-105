//http://www.gingerbeardman.com/loveletter/
//copied from https://trinket.io/html/c208236a41

var
  salutations1 = ["BELOVED", "DARLING", "DEAR", "DEAREST", "FANCIFUL", "HONEY", "MY", "MOST"],

  salutations2 = ["CHICKPEA", "DEAR", "DUCK", "JEWEL", "LOVE", "MOPPET", "SWEETHEART"],

  adverbs = ["AFFECTIONATELY", "ARDENTLY", "ANXIOUSLY", "BEAUTIFULLY",
    "BURNINGLY", "COVETOUSLY", "CURIOUSLY", "EAGERLY", "FERVENTLY",
    "FONDLY", "IMPATIENTLY", "KEENLY", "LOVINGLY", "PASSIONATELY",
    "SEDUCTIVELY", "TENDERLY", "WISTFULLY", ""
  ],

  adjectives = ["AFFECTIONATE", "AMOROUS", "ANXIOUS", "AVID", "BEAUTIFUL",
    "BREATHLESS", "BURNING", "COVETOUS", "CRAVING", "CURIOUS",
    "EAGER", "FERVENT", "FONDEST", "LOVEABLE", "LOVESICK",
    "LOVING", "PASSIONATE", "PRECIOUS", "SEDUCTIVE", "SWEET",
    "SYMPATHETIC", "TENDER", "UNSATISFIED", "WINNING", "WISTFUL", ""
  ],

  nouns = ["ADORATION", "AFFECTION", "AMBITION", "APPETITE", "ARDOUR", "BEING",
    "BURNING", "CHARM", "CRAVING", "DESIRE", "DEVOTION", "EAGERNESS",
    "ENCHANTMENT", "ENTHUSIASM", "FANCY", "FELLOW FEELING", "FERVOUR",
    "FONDNESS", "HEART", "HUNGER", "INFATUATION", "LITTLE LIKING",
    "LONGING", "LOVE", "LUST", "PASSION", "RAPTURE", "SYMPATHY",
    "THIRST", "WISH", "YEARNING"
  ],

  verbs = ["ADORES", "ATTRACTS", "CLINGS TO", "HOLDS DEAR", "HOPES FOR",
    "HUNGERS FOR", "LIKES", "LONGS FOR", "LOVES", "LUSTS AFTER",
    "PANTS FOR", "PINES FOR", "SIGHS FOR", "TEMPTS", "THIRSTS FOR",
    "TREASURES", "YEARNS FOR", "WOOS"
  ];

function choose(lst) {
  var i = Math.floor(Math.random() * lst.length);
  return lst[i];
}

var msg = document.body;

msg.innerHTML = choose(salutations1) + " " + choose(salutations2) + "," + "<p>";

for (var i = 0; i < 5; i = i + 1) {
  if (Math.random() < 0.5) {
    msg.innerHTML += "MY " +
      choose(adjectives) + " " +
      choose(nouns) + " " + choose(adverbs) + " " +
      choose(verbs) + " YOUR " +
      choose(adjectives) + " " + choose(nouns) + ". ";
  } else {
    msg.innerHTML += "YOU ARE MY " +
      choose(adjectives) + " " + choose(nouns) + ". ";
  }
}

msg.innerHTML += "<p>YOURS " + choose(adverbs) + ",<p>ANCIENT PERISAN MAN";
