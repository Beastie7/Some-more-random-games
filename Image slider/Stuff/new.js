const text = "My Sweet Lover, From the moment I heard your voice I felt a connection to your soul. I can still remember exactly how you looked the day we first met. Your beautiful eyes captured my heart and your smile erased any and all doubts that I had ever experienced. When you opened your arms I stepped into your loving, kind embrace and knew that I was home right where I had always belonged. You knew just the words to say to put me at ease and when your hand reached out to hold mine, I realized that I had found my future, my soul-mate and the love that I had always dreamed of discovering. We spoke for hours about every possible subject and never ran out of words to say to each other. I could see the longing and passion in your eyes and I am sure that it was a reflection of the incredibly intense desire that I was feeling at the same moment. The world had ceased to exist and there were only the two of us sitting next to each other, holding hands and experiencing emotions that we had never felt before. When you first whispered the words, I love you, into my ear as we walked along the beach, it was the happiest moment in my life. My joy was deeper, richer and more intense than I had ever dreamed possible. I can remember the tears in my eyes as I turned to look at you. The kiss we shared that night was one I shall never forget. Having to tell you Good Night and return home without you was the hardest thing that I have ever had to do in my life. Even knowing that you would call me on the phone later to wish me goodnight once more made our parting no easier to bear. The moments when we were apart seemed like a bitter eternity and I could barely wait until the next time I would see you or talk to you. Never have distances seemed so long and cold and lonely. Our phone conversations would often have long moments where the two of us just held the phone to our ears and took comfort from the sound of the other's soft breathing. You are the only person that could cause my heart to skip a beat with just a sidelong glance or a gentle smile. I gaze into your eyes and lose track of where I am, and even who I am. Your voice stirs a deeply intense longing in every fiber of my body and your caress makes me feel as though I am melting inside. These are feelings that I never knew existed and now I never want to lose these feelings, not even for a moment. Ever since you came into my life I have known what true love and desire really are and these are emotions that many people will never know. You appear to me in my dreams and even these imaginary kisses rock my world and thrill me to the very core of my being. I can barely wait until the night is here, when I can lie in bed and dream of you once more. I want nothing more than to spend my life with you at my side. When I wake in the morning I want to find you there beside me. When I go to sleep at night I want to feel your arms holding me, protecting me from the world. one true love of my life and I am only sorry that it took us so many years to meet. Now that we have found each other and are making a life together I will never again know the empty feelings of loneliness. You have made my life complete and I shall cherish your incredible gift of unconditional love and devotion until the moment that my body takes its last breath on this Earth. I love you, my darling. No matter what the future holds for us I will love you until the end of time, and beyond. These words are my promise to never take you for granted or doubt the love that binds us for now and all eternity.";

const paragraph = text.split("");
let i = 0;

function dashOut(arr) {
  const textContainer = document.querySelector(".textCont");
  if (!textContainer) {
    console.error("Error: .textCont element not found in the DOM.");
    return;
  }

  if (i < arr.length) {
    textContainer.textContent += arr[i];
    i++;
    setTimeout(() => dashOut(arr), interval(arr[i - 1]));
  }
}

function interval(letter) {
  if ([";", ".", ","].includes(letter)) {
    return Math.random() * 500 + 500;
  } else {
    return Math.random() * 130 + 50;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  i = 0;
  dashOut(paragraph);
});