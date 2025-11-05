
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center">B</div>
            <div>
              <h4 className="font-semibold">Buildlinks</h4>
              <p className="text-xs text-slate-300">Building stronger communities — one project at a time.</p>
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Links</h5>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>About Us</li>
            <li>Service</li>
            <li>Contact Us</li>
            <li>Log in</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Working hours</h5>
          <p className="text-sm text-slate-300">Monday - Friday • 8:00 - 16:00</p>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Get In Touch</h5>
          <p className="text-sm text-slate-300">
            Phone: +263701453434
            <br />
            Email: Buildlinks@gmail.com
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 text-center text-slate-400 text-sm">
        Copyright 2020 by Buildlinks
      </div>
    </footer>
  );
}
