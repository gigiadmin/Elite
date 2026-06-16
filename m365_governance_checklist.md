# 5-Point Checklist for Governing Microsoft Copilot
**A GigitekAI Guide for Tampa Bay Law & Healthcare Firms**

Before you roll out Microsoft Copilot to your team, ensure these 5 governance pillars are in place to prevent data leakage and maintain compliance (HIPAA/Legal).

### 1. Zero Trust Identity & Access Audit
*   **The Risk:** Copilot can access anything the user has permission to see. If your internal permissions are "messy," Copilot will resurface sensitive files (salaries, patient records, internal strategy) to the wrong people.
*   **The Fix:** Conduct a "Least Privilege" audit. Use Microsoft Purview to identify and restrict access to sensitive folders before enabling the Copilot license.

### 2. Sensitivity Labeling & Data Classification
*   **The Risk:** Without labels like "Confidential" or "PHI" (Protected Health Information), Copilot treats all data as equal. It might summarize a sensitive deposition or medical record into an unencrypted email.
*   **The Fix:** Implement automated sensitivity labeling in M365. Train Copilot to recognize and respect these labels so it doesn't process or export restricted data.

### 3. "Shadow AI" Usage Policy
*   **The Risk:** Your staff is likely already using free, personal versions of ChatGPT or Claude. These tools "learn" from your data, potentially exposing your firm's intellectual property or client data to the public.
*   **The Fix:** Establish a clear policy. Ban the use of personal AI accounts for company work and provide a sanctioned, "Governed" alternative (like your Elite tier) where data stays within your tenant.

### 4. Over-Sharing & Tenant Boundary Check
*   **The Risk:** In many M365 tenants, files are shared via "Anyone with the link" or shared broadly across the organization. Copilot will index these files and potentially share them in summaries to external guests if not configured correctly.
*   **The Fix:** Review your external sharing settings. Disable "Anyone" links for sensitive sites and ensure that "Company-wide" sharing is limited to non-sensitive material.

### 5. Prompt Engineering & Output Validation Training
*   **The Risk:** AI can "hallucinate" or produce biased results. If a paralegal or nurse relies on an unverified AI summary for a legal filing or patient update, the firm is liable.
*   **The Fix:** Mandatory training for all AI users. Teach them how to write "Governed Prompts" and, more importantly, the "Human-in-the-Loop" verification process for every AI-generated output.

---
**Need help with your M365 Governance?**
GigitekAI specializes in preparing Tampa firms for the AI era. 
**Schedule your 15-minute AI Security Audit at gigitekai.com/contact.**
