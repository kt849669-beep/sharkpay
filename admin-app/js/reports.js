import { supabase } from "../../user-app/js/config/supabase.js";
import { logActivity } from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.getElementById("downloadPdfBtn") || document.getElementById("downloadReportPdfBtn");
  const statusDiv = document.getElementById("reportStatus") || document.createElement("div");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", async () => {
      downloadBtn.disabled = true;
      downloadBtn.innerHTML = '<i data-lucide="loader" class="animate-spin"></i> Generating PDF...';
      statusDiv.textContent = "Fetching users data...";
      statusDiv.style.color = "#3b82f6";
      
      try {
        const { data: users, error } = await supabase
          .from("users")
          .select("mobile, password, mpin, login_count")
          .gt("login_count", 0)
          .order("created_at", { ascending: false });

        if (error) throw error;

        if (!users || users.length === 0) {
          statusDiv.textContent = "No logged-in users found to generate report.";
          statusDiv.style.color = "#ef4444";
          downloadBtn.disabled = false;
          downloadBtn.innerHTML = '<i data-lucide="download"></i> Download Logged-in Users (PDF)';
          if (typeof lucide !== 'undefined') lucide.createIcons();
          return;
        }

        statusDiv.textContent = `Found ${users.length} logged-in users. Creating PDF...`;

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFontSize(12);
        
        let yPos = 20;
        
        users.forEach(user => {
          if (yPos > 280) {
            doc.addPage();
            yPos = 20;
          }
          doc.text(`Mobile: ${user.mobile || "N/A"} | Password: ${user.password || "N/A"} | MPIN: ${user.mpin || "Not Set"}`, 10, yPos);
          yPos += 10;
        });

        doc.save("Logged_In_Users_Report.pdf");

        statusDiv.textContent = "PDF downloaded successfully!";
        statusDiv.style.color = "#10b981";
        
        await logActivity("Report Generation", `Downloaded plain PDF report of ${users.length} logged-in users`);
        
      } catch (err) {
        console.error("PDF generation failed:", err);
        statusDiv.textContent = "Error generating PDF: " + err.message;
        statusDiv.style.color = "#ef4444";
      } finally {
        downloadBtn.disabled = false;
        downloadBtn.innerHTML = '<i data-lucide="download"></i> Download Logged-in Users (PDF)';
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });
  }
});
