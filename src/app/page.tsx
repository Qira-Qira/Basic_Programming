"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  CircleHelp,
  Code2,
  Flame,
  Lightbulb,
  LockKeyhole,
  Menu,
  Play,
  Sparkles,
  Terminal,
  Trophy,
  Zap,
  X,
} from "lucide-react";

const lessons = [
  {
    section: "01",
    label: "Cara berpikir",
    title: "Belajar berpikir seperti programmer",
    subtitle:
      "Programming bukan soal menghafal kode. Ini soal memecah masalah besar menjadi langkah-langkah kecil yang bisa dijalankan.",
    duration: "4 menit",
    goals: [
      "Kenali masalah sebelum menulis kode",
      "Pecah solusi menjadi instruksi sederhana",
      "Uji hasil dan perbaiki jika belum tepat",
    ],
    codeTitle: "Cara kerja program",
    code: `// Komputer mengikuti instruksi satu per satu\n1. Terima input\n2. Proses instruksi\n3. Tampilkan output`,
    explanation:
      "Program adalah urutan instruksi yang memberi tahu komputer apa yang harus dilakukan. Komputer sangat cepat, tetapi hanya mengerjakan instruksi yang jelas.",
    question: "Apa langkah terbaik sebelum mulai menulis kode?",
    answers: [
      "Langsung memilih bahasa pemrograman",
      "Memahami masalah dan hasil yang diinginkan",
      "Menyalin kode dari proyek lain",
    ],
    correct: 1,
    hint: "Mulai dari masalahnya, bukan dari sintaksnya.",
  },
  {
    section: "02",
    label: "Algoritma",
    title: "Susun solusi langkah demi langkah",
    subtitle:
      "Algoritma adalah resep penyelesaian masalah: urutan langkah yang masuk akal, jelas, dan punya titik akhir.",
    duration: "5 menit",
    goals: [
      "Tulis instruksi dalam urutan yang benar",
      "Pastikan setiap langkah tidak ambigu",
      "Kenali input dan output sebuah proses",
    ],
    codeTitle: "Algoritma membuat teh",
    code: `ambil gelas\nmasukkan teh dan gula\ntuangkan air panas\naduk hingga larut\nsajikan`,
    explanation:
      "Urutan itu penting. Jika langkah mengaduk dilakukan sebelum air dituangkan, hasilnya berbeda. Program bekerja dengan prinsip yang sama.",
    question: "Ciri utama algoritma yang baik adalah...",
    answers: [
      "Langkahnya jelas dan berurutan",
      "Menggunakan banyak istilah teknis",
      "Tidak perlu memiliki hasil akhir",
    ],
    correct: 0,
    hint: "Bayangkan orang lain perlu mengikuti instruksi itu tanpa menebak-nebak.",
  },
  {
    section: "03",
    label: "Variabel",
    title: "Simpan informasi dengan variabel",
    subtitle:
      "Variabel adalah nama untuk sebuah nilai. Anggap seperti label pada kotak yang bisa dipakai dan diperbarui oleh program.",
    duration: "5 menit",
    goals: [
      "Deklarasikan variabel dengan tipe data",
      "Gunakan final untuk nilai yang tidak diubah",
      "Pilih nama variabel yang mudah dipahami",
    ],
    codeTitle: "Java · variabel",
    code: `public class Main {\n  public static void main(String[] args) {\n    String course = "Basic Programming";\n    int score = 0;\n\n    score = score + 10;\n    System.out.println(score); // 10\n  }\n}`,
    explanation:
      "Java meminta tipe data saat variabel dibuat. Gunakan final untuk nilai yang tetap, sementara variabel biasa seperti score dapat diperbarui. Nama yang deskriptif membuat kode lebih mudah dibaca.",
    question: "Tipe data Java yang tepat untuk bilangan bulat adalah...",
    answers: ["String", "int", "return"],
    correct: 1,
    hint: "Skor bisa bertambah setelah tantangan selesai.",
  },
  {
    section: "04",
    label: "Tipe data",
    title: "Pilih tipe data yang tepat",
    subtitle:
      "Komputer perlu tahu jenis informasi yang sedang diproses. Tipe data membantu program memahami nilai dan operasi yang sesuai.",
    duration: "6 menit",
    goals: [
      "Bedakan teks, angka, dan nilai logika",
      "Gunakan array untuk kumpulan data",
      "Gunakan object untuk data berlabel",
    ],
    codeTitle: "Java · tipe data",
    code: `String learner = "Nadia";       // teks\nint level = 1;                 // bilangan bulat\nboolean isReady = true;        // logika\nString[] topics = {"data", "loop"};`,
    explanation:
      "String menyimpan teks, int menyimpan bilangan bulat, dan boolean bernilai true atau false. Array menyimpan daftar nilai dengan tipe yang sama; class dapat dipakai untuk mengelompokkan data berlabel.",
    question: "Tipe data yang tepat untuk status aktif/nonaktif adalah...",
    answers: ["string", "boolean", "array"],
    correct: 1,
    hint: "Status ini hanya punya dua kemungkinan: true atau false.",
  },
  {
    section: "05",
    label: "Operator",
    title: "Bandingkan dan hitung nilai",
    subtitle:
      "Operator adalah simbol untuk melakukan sesuatu pada nilai: menghitung, membandingkan, atau menggabungkan kondisi.",
    duration: "5 menit",
    goals: [
      "Gunakan +, -, *, dan / untuk berhitung",
      "Bandingkan nilai dengan === dan !==",
      "Gabungkan kondisi memakai && atau ||",
    ],
    codeTitle: "Java · operator",
    code: `int price = 12;\nint quantity = 3;\nint total = price * quantity;\nboolean canBuy = total <= 40;\n\nSystem.out.println(canBuy); // true`,
    explanation:
      "Operator aritmetika menghasilkan nilai baru. Operator perbandingan menghasilkan boolean, sehingga sering dipakai untuk menentukan keputusan program.",
    question: "Hasil dari 12 * 3 <= 40 adalah...",
    answers: ["36", "true", "false"],
    correct: 1,
    hint: "12 × 3 menghasilkan 36. Apakah 36 kurang dari atau sama dengan 40?",
  },
  {
    section: "06",
    label: "Percabangan",
    title: "Buat keputusan dengan kondisi",
    subtitle:
      "Dengan if dan else, program bisa memilih tindakan berbeda berdasarkan keadaan yang sedang terjadi.",
    duration: "6 menit",
    goals: [
      "Tulis kondisi yang menghasilkan true/false",
      "Tangani pilihan dengan if dan else",
      "Tambahkan else if untuk beberapa kondisi",
    ],
    codeTitle: "Java · if / else",
    code: `int score = 82;\n\nif (score >= 80) {\n  System.out.println("Lulus!");\n} else {\n  System.out.println("Coba lagi");\n}`,
    explanation:
      "Bagian di dalam if hanya berjalan jika kondisi bernilai true. else menjadi jalur alternatif saat kondisi tersebut false.",
    question: "Kapan blok else dijalankan?",
    answers: [
      "Saat kondisi if bernilai false",
      "Setiap kali program dibuka",
      "Sebelum kondisi if diperiksa",
    ],
    correct: 0,
    hint: "else adalah jalur alternatif dari if.",
  },
  {
    section: "07",
    label: "Perulangan",
    title: "Ulangi tugas tanpa menulis ulang",
    subtitle:
      "Loop menjalankan instruksi berulang kali. Gunakan kondisi berhenti agar program tidak mengulang selamanya.",
    duration: "6 menit",
    goals: [
      "Pilih for untuk jumlah pengulangan yang diketahui",
      "Gunakan while selama kondisi masih benar",
      "Pastikan loop memiliki kondisi berhenti",
    ],
    codeTitle: "Java · for loop",
    code: `for (int lap = 1; lap <= 3; lap++) {\n  System.out.println("Putaran " + lap);\n}\n\n// Putaran 1\n// Putaran 2\n// Putaran 3`,
    explanation:
      "Loop for punya tiga bagian: nilai awal, kondisi lanjut, dan perubahan setiap putaran. lap++ menambah nilai lap sebanyak satu.",
    question: "Apa risiko jika kondisi loop tidak pernah menjadi false?",
    answers: [
      "Program berhenti lebih cepat",
      "Terjadi infinite loop",
      "Variabel otomatis terhapus",
    ],
    correct: 1,
    hint: "Komputer akan terus menjalankan putaran yang sama.",
  },
  {
    section: "08",
    label: "Method",
    title: "Bungkus instruksi menjadi method",
    subtitle:
      "Method adalah blok kode bernama di dalam class yang bisa dipanggil kembali. Method membuat program lebih rapi dan mengurangi pengulangan.",
    duration: "7 menit",
    goals: [
      "Buat method dengan tipe nilai kembalian",
      "Kirim data melalui parameter",
      "Kembalikan hasil dengan return",
    ],
    codeTitle: "Java · method",
    code: `public class Main {\n  static String greet(String name) {\n    return "Halo, " + name + "!";\n  }\n\n  public static void main(String[] args) {\n    String message = greet("Nadia");\n    System.out.println(message);\n  }\n}`,
    explanation:
      "Di Java, method berada di dalam class. name adalah parameter yang diterima method, dan return mengirim hasilnya kembali ke pemanggil.",
    question: "Kata kunci untuk mengirim hasil dari method adalah...",
    answers: ["break", "return", "const"],
    correct: 1,
    hint: "Nilai ini bisa ditampung ke dalam variabel setelah fungsi dipanggil.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [quizClaimed, setQuizClaimed] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeLesson = lessons[activeIndex];
  const xp = completed.length * 40 + quizClaimed.length * 20;
  const level = Math.floor(xp / 120) + 1;
  const levelProgress = ((xp % 120) / 120) * 100;

  function goToLesson(index: number) {
    setActiveIndex(index);
    setSelectedAnswer(null);
    setMobileMenuOpen(false);
  }

  function markComplete() {
    setCompleted((current) =>
      current.includes(activeIndex) ? current : [...current, activeIndex],
    );
    if (activeIndex < lessons.length - 1) goToLesson(activeIndex + 1);
  }

  function answerQuiz(index: number) {
    setSelectedAnswer(index);
    if (index === activeLesson.correct && !quizClaimed.includes(activeIndex)) {
      setQuizClaimed((current) => [...current, activeIndex]);
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Bytewise home">
          <span className="brand-mark"><Code2 size={19} strokeWidth={2.5} /></span>
          <span className="brand-name">Basic Programming<span>.</span></span>
        </a>
        <div className="player-stats">
          <div className="xp-chip"><Zap size={15} fill="currentColor" /><strong>{xp} XP</strong></div>
          <button
            className="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Tutup menu pelajaran" : "Buka menu pelajaran"}
            aria-expanded={mobileMenuOpen}
            aria-controls="course-sidebar"
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <button
          className="sidebar-backdrop"
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Tutup menu pelajaran"
        />
      )}

      <div className="workspace" id="home">
        <aside
          className={`lesson-sidebar ${mobileMenuOpen ? "is-open" : ""}`}
          id="course-sidebar"
          aria-label="Course chapters"
          aria-hidden={!mobileMenuOpen && undefined}
        >
          <div className="sidebar-heading">
            <div className="eyebrow">YOUR COURSE</div>
            <h2>Basic<br />Programming</h2>
            <div className="course-meta"><BookOpen size={14} /> 8 lessons <span>·</span> 44 min</div>
          </div>
          <div className="syllabus-label">COURSE CONTENT <span>{completed.length}/8</span></div>
          <nav className="lesson-list">
            {lessons.map((lesson, index) => {
              const isComplete = completed.includes(index);
              return (
                <button
                  className={`lesson-link ${index === activeIndex ? "is-active" : ""} ${isComplete ? "is-complete" : ""}`}
                  key={lesson.section}
                  onClick={() => goToLesson(index)}
                  aria-current={index === activeIndex ? "step" : undefined}
                >
                  <span className="lesson-index">{isComplete ? <Check size={14} /> : lesson.section}</span>
                  <span className="lesson-label">{lesson.label}</span>
                  {index === activeIndex && <Play className="lesson-play" size={13} fill="currentColor" />}
                  {isComplete && <CheckCircle2 className="lesson-check" size={15} />}
                </button>
              );
            })}
          </nav>
          <div className="sidebar-bottom">
            <div className="level-heading"><span>LEVEL {level}</span><span>{xp % 120} / 120 XP</span></div>
            <div className="level-track"><span style={{ width: `${levelProgress}%` }} /></div>
            <div className="next-level"><Trophy size={14} /> Next up: Code explorer</div>
          </div>
        </aside>

        <main className="lesson-main">
          <div className="lesson-progress-row">
            <div className="breadcrumb"><span>COURSE</span><span className="crumb-slash">/</span><strong>LESSON {activeLesson.section}</strong></div>
            <div className="slide-count">{String(activeIndex + 1).padStart(2, "0")} <span>/</span> {String(lessons.length).padStart(2, "0")}</div>
          </div>
          <div className="overall-progress"><span style={{ width: `${((activeIndex + 1) / lessons.length) * 100}%` }} /></div>

          <article className="lesson-content" key={activeLesson.section}>
            <div className="lesson-kicker"><span className="kicker-number">{activeLesson.section}</span> THE FOUNDATIONS <span className="kicker-line" /> <span>{activeLesson.duration}</span></div>
            <h1>{activeLesson.title}</h1>
            <p className="lesson-intro">{activeLesson.subtitle}</p>

            <div className="concept-strip">
              <span className="concept-icon"><Lightbulb size={19} /></span>
              <p>{activeLesson.explanation}</p>
            </div>

            <div className="lesson-grid">
              <section className="code-section" aria-label="Code example">
                <div className="section-topline"><h2>{activeLesson.codeTitle}</h2><span className="language-tag">{activeIndex < 2 ? "PSEUDOCODE" : "JAVA"}</span></div>
                <div className="code-window">
                  <div className="code-titlebar"><div className="window-controls"><i /><i /><i /></div><span>example.{activeIndex < 2 ? "txt" : "java"}</span><Terminal size={14} /></div>
                  <pre><code>{activeLesson.code}</code></pre>
                </div>
              </section>
              <section className="goals-section" aria-label="Learning goals">
                <div className="section-topline"><h2>After this lesson</h2><span className="goal-count">0{activeLesson.goals.length}</span></div>
                <ul className="goal-list">
                  {activeLesson.goals.map((goal) => <li key={goal}><span><Check size={12} /></span>{goal}</li>)}
                </ul>
                <div className="tip-note"><Sparkles size={15} /><span>Small steps make powerful programs.</span></div>
              </section>
            </div>

            <div className="lesson-footer">
              <button className="previous-button" onClick={() => goToLesson(Math.max(0, activeIndex - 1))} disabled={activeIndex === 0}><ArrowLeft size={16} /> Previous</button>
              <button className={`complete-button ${completed.includes(activeIndex) ? "completed-button" : ""}`} onClick={markComplete}>
                {completed.includes(activeIndex) ? <><CheckCircle2 size={17} /> Lesson complete</> : <>Mark as complete <Check size={16} /></>}
              </button>
              <button className="next-button" onClick={() => goToLesson(Math.min(lessons.length - 1, activeIndex + 1))} disabled={activeIndex === lessons.length - 1}>Next <ArrowRight size={16} /></button>
            </div>
          </article>
        </main>

        <aside className="challenge-sidebar" aria-label="Knowledge check and progress">
          <div className="challenge-heading"><div className="challenge-icon"><CircleHelp size={18} /></div><div><span>QUICK CHECK</span><h2>Knowledge check</h2></div></div>
          <p className="question-text">{activeLesson.question}</p>
          <div className="answer-list">
            {activeLesson.answers.map((answer, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === activeLesson.correct;
              const reveal = selectedAnswer !== null && isSelected;
              return (
                <button
                  key={answer}
                  className={`answer-option ${reveal ? (isCorrect ? "answer-correct" : "answer-wrong") : ""} ${selectedAnswer !== null && isCorrect ? "show-correct" : ""}`}
                  onClick={() => answerQuiz(index)}
                  aria-pressed={isSelected}
                >
                  <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                  <span>{answer}</span>
                  {reveal && isCorrect && <Check size={15} className="answer-result" />}
                </button>
              );
            })}
          </div>
          {selectedAnswer !== null && <div className={`answer-feedback ${selectedAnswer === activeLesson.correct ? "feedback-correct" : "feedback-wrong"}`} role="status">{selectedAnswer === activeLesson.correct ? "Nice work! +20 XP added." : activeLesson.hint}</div>}
          <div className="challenge-reward"><Zap size={15} fill="currentColor" /><span>Correct answer</span><strong>+20 XP</strong></div>

          <div className="divider" />
          <div className="mission-card">
            <div className="mission-topline"><span>YOUR MISSION</span><span className="mission-badge"><Sparkles size={12} /> IN PROGRESS</span></div>
            <h3>Think it. Build it.</h3>
            <p>Complete the learning path to earn your first coding badge.</p>
            <div className="mission-progress"><div className="mission-track"><span style={{ width: `${(completed.length / lessons.length) * 100}%` }} /></div><span>{completed.length}/8</span></div>
            <div className="mission-reward"><Trophy size={15} /><span>FOUNDATION BADGE</span><LockKeyhole size={13} className={completed.length === lessons.length ? "unlocked" : ""} /></div>
          </div>
          <div className="help-note"><span className="help-dot" /><span>Stuck? Review the example, then try again.</span></div>
        </aside>
      </div>
      <footer className="page-footer"><span>BYTEWISE LEARNING STUDIO</span><span>BUILT FOR CURIOUS MINDS <span className="footer-star">✳</span></span></footer>
    </div>
  );
}
