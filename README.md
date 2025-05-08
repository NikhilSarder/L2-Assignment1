# ✨ TypeScript Interview Questions – Blog

এই ব্লগটিতে TypeScript-এর দুটি গুরুত্বপূর্ণ বিষয় ব্যাখ্যা করা হয়েছে, যা ইন্টারভিউ এবং বাস্তব প্রজেক্টে বেশ কাজে লাগে।

---

## 📌 ১. any, unknown এবং never টাইপের পার্থক্য

TypeScript আমাদের টাইপ সেফটি নিশ্চিত করতে সাহায্য করে। কিন্তু কিছু টাইপ আছে যেগুলোকে সঠিকভাবে না বুঝলে বাগের সম্ভাবনা বাড়ে। চলুন `any`, `unknown`, এবং `never` টাইপের পার্থক্যগুলো দেখি।

### 🔹 any টাইপ

- যেকোনো ধরণের মান রাখতে পারে।
- TypeScript টাইপ চেক করে না।

```ts
let value: any = "Hello";
value = 123;
value = true;
console.log(value); // কোন টাইপের মানই চলবে
🔹 unknown টাইপ
এটিও যেকোনো টাইপ রাখতে পারে।

তবে ব্যবহারের আগে টাইপ চেক করতে হয়।

let input: unknown = "Test";

if (typeof input === "string") {
  console.log(input.toUpperCase()); // নিরাপদ
}

🔹 never টাইপ
এমন ফাংশনের জন্য যা কখনোই কোনো মান রিটার্ন করে না।

সাধারণত error throw করার সময় ব্যবহৃত হয়।

function throwError(msg: string): never {
  throw new Error(msg);
}



📌 ২. Union ও Intersection টাইপের ব্যবহার
TypeScript-এ টাইপ ম্যানেজমেন্টের জন্য union এবং intersection টাইপ খুব গুরুত্বপূর্ণ।

🔹 Union টাইপ (|)
একটি ভ্যারিয়েবল একাধিক টাইপ ধারণ করতে পারে।
function printId(id: number | string): void {
  console.log("Your ID is: " + id);
}

printId(101);
printId("abc123");
✅ উপরের কোডে id হতে পারে number অথবা string।

🔹 Intersection টাইপ (&)
দুটি বা তার বেশি টাইপকে একত্র করে নতুন টাইপ তৈরি করা যায়।

ts
Copy
Edit
type Person = { name: string };
type Worker = { jobTitle: string };

type Employee = Person & Worker;

const emp: Employee = {
  name: "Rahim",
  jobTitle: "Developer"
};