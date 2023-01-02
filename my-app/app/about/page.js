import React from 'react'
import Image from 'next/image';
export default function about() {
    return (

<figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <Image class="w-24 h-24 rounded-full mx-auto" src="/assets/cookis.jpeg" alt="" width="384" height="512">

  </Image>
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
      “'Cookie’s reputation as one of the best restaurants in Jordan for those who love dining in a buzzing atmosphere with a fantastic cocktail in their hand is widely-spread and well-deserved'”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
      Mohannad Gh
      </div>
      <div class="text-slate-700 dark:text-slate-500">
      Jordan , Amman
      </div>
    </figcaption>
  </div>
</figure>
  
    )
}