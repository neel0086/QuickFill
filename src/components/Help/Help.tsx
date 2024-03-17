import React from "react";

const Help: React.FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-base mt-4">
          <p className="text-2xl font-bold mt-1">Why QuickFill? 🚀</p>

          <p className="text-sm ">
            Have you ever been bogged down by those never-ending, monotonous
            forms that seem to go on forever? 😩 Imagine having to repeatedly
            input the same information day in and day out! 😫 That's where we
            swoop in to save the day! 🦸‍♂️ With QuickFill, you just need to enter
            your information once, and the next time you visit any website,
            boom! 🎉 Fill up those forms in a flash with just one click! 💥 No
            more hassle, no more repetitive typing. 😎 It's like magic, but
            better! ✨ And guess what? We don't save your info; it stays right
            on your local device, safe and sound. 🔒 Your privacy? Consider it
            our top priority! 👍
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold mt-4">
            🤔 Wondering how it works? Check below! 🛠️
          </p>
          <div className="flex items-center">
            <img
              src="help_img1.png"
              className="w-80 border-2 border-white border-solid"
            />
            <div className="ml-2">
              <p className="text-xs">
                right click to open context menu press on QuickFill
              </p>
            </div>
          </div>
          <div className="text-sm mt-4 mb-8">
            <p>
              1) 🛠️ Click "Enable Suggestion" to receive customized suggestions
              based on your input (Key, Value).
            </p>
            <p className="text-sm mt-4">
              2) 🚀 AutoFill: Automatically detects and fills in appropriate
              information using a single click. (CMD/CRTL + SHIFT + L)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
