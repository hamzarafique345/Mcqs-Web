export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black text-center text-gray-300 py-4 ">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MCQs Challenge. All Rights Reserved. | Developed by <span  className="font-semibold text-yellow-400" >Hamza</span> and <span className="font-semibold text-yellow-400">Ali</span>.
      </p>
    </footer>
  );
}
