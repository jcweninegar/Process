const stepsData = [
  {
    id: 'setup',
    order: 0,
    eyebrow: 'Setup',
    title: 'Prepare your ChatGPT Project',
    description:
      'Create or open a ChatGPT Project where all outputs will live: idea pitch, research, Shape Up, PRD, build notes, and test report.',
    instructions:
      'Open ChatGPT, create or select a Project for this idea. All markdown files will be stored there. Keep it open for every prompt.',
    isExpanded: true,
  },
  {
    id: 'chat',
    order: 1,
    eyebrow: 'Step 1',
    title: 'Chat',
    description:
      'Clarify the idea, the user, the problem, constraints, and the 24-hour appetite. End with a crisp 1–3 sentence pitch.',
    instructions:
      'Paste this into your ChatGPT Project. Answer its questions. Keep the scope simple, minimal, and mobile-first. ChatGPT will write idea-pitch.md for you.',
    prompt: `You are a pragmatic product guide. Goal: craft a 1–3 sentence pitch labeled "Final Pitch" for my MVP and save it to idea-pitch.md in this ChatGPT Project. \n\nProcess:\n1) Ask me clarifying questions about the idea, user, problem, constraints, and success criteria.\n2) Explicitly set the appetite: 24-hour build, simple, minimal, single-screen, mobile-first.\n3) Summarize in 1–3 sentences: problem, audience, and the smallest valuable outcome. Label it "Final Pitch".\n4) Save the pitch to a markdown file named idea-pitch.md (overwrite if it exists). Include date + time at top.\n\nConstraints:\n- Keep language plain and concrete.\n- No business fluff.\n- Do not add roadmap items beyond 24 hours.`,
  },
  {
    id: 'research',
    order: 2,
    eyebrow: 'Step 2',
    title: 'Deep Research',
    description:
      'Turn the pitch into understanding of users, market patterns, motivations, and risks to keep the MVP grounded.',
    instructions:
      'Run this in the same ChatGPT Project. It will read idea-pitch.md and create deepresearch.md with the findings.',
    prompt: `You are a focused product researcher. Work inside this ChatGPT Project.\n\nInputs: idea-pitch.md (required).\nOutputs: deepresearch.md with three sections.\n\nTasks:\n1) Read idea-pitch.md.\n2) Summarize the problem and target user in your own words (brief).\n3) Produce three sections in deepresearch.md:\n   - Market & Problem Deep Dive: real-world patterns, motivations, urgency, constraints.\n   - Opportunities & Gaps: what competitors miss, what a 24-hour MVP can uniquely deliver.\n   - MVP Direction: the smallest viable scope respecting a single-screen, mobile-first, minimal build.\n4) Save markdown to deepresearch.md with headings, bullets, and short sentences.\n\nRules:\n- Stay concrete; avoid generic advice.\n- Keep scope aligned to a 24-hour build.`,
  },
  {
    id: 'shapeup',
    order: 3,
    eyebrow: 'Step 3',
    title: 'Shape Up',
    description:
      'Convert insights into a shaped solution with boundaries, appetite, risks, and no-gos following Basecamp’s Shape Up.',
    instructions:
      'Use this prompt in the Project. It reads idea-pitch.md and deepresearch.md and writes shapup.md as a full pitch.',
    prompt: `You are shaping a small bet using Basecamp's Shape Up. Work inside this ChatGPT Project.\n\nInputs: idea-pitch.md, deepresearch.md.\nOutput: shapup.md.\n\nWrite shapup.md with these sections:\n- Problem: the specific pain to solve.\n- Appetite: 24 hours, minimal, single-screen, mobile-first.\n- Solution: single-screen accordion listing 8 steps (Setup → Chat → Deep Research → Shape Up → UX Design → PRD → Build → Test) with prompt blocks that copy to clipboard and a short description per step.\n- No-Gos: things we will not build (automation, integrations, analytics, theming, multi-session complexity).\n- Rabbit Holes: risks that could eat time (overdesigning UI, adding routing, backend complexity).\n- Risks: top delivery risks and mitigation.\n- Boundaries: what success looks like for this 24-hour build.\n\nRules:\n- Keep writing concise and action-oriented.\n- Keep scope tight to 24 hours.\n- Save/overwrite shapup.md.`,
  },
  {
    id: 'ux',
    order: 4,
    eyebrow: 'Step 4',
    title: 'UX Design',
    description:
      'Sketch a single mobile screen showing the 8-step accordion. This helps the next prompts understand the flow.',
    instructions:
      'Sketch or mock a mobile screen with: title at top, 8 vertical steps, (+)/(–) toggles, and expanded step showing description plus prompt block. Use pen-and-paper or Figma, then upload images to this Project. If you skip, later prompts will infer UX from shapup.md.',
  },
  {
    id: 'prd',
    order: 5,
    eyebrow: 'Step 5',
    title: 'PRD',
    description:
      'Translate the shaped idea into a developer-ready PRD with user stories, acceptance criteria, data, and edge cases.',
    instructions:
      'Run in the Project. It will read shapup.md, idea-pitch.md, deepresearch.md, and any UX images, then write prd-v1.md.',
    prompt: `You are a staff-level product lead writing a tight PRD. Work inside this ChatGPT Project.\n\nInputs: shapup.md, idea-pitch.md, deepresearch.md, UX images if present.\nOutput: prd-v1.md.\n\nWrite prd-v1.md with sections:\n1) Overview (goal, one-sentence summary).\n2) Users (primary persona and context).\n3) Problem & Appetite (24-hour, minimal, mobile-first).\n4) Solution Walkthrough (single-screen accordion with 8 steps, prompt clipping, copy interaction, haptics optional).\n5) Detailed Requirements (per step: description, instructions, prompt block behavior, file outputs).\n6) UX (layout, spacing, typography, fading prompt preview, Copy → Copied interaction, mobile-first constraints).\n7) Non-Goals (no automation, no integrations, no analytics, no theming, no multi-page).\n8) Data Model (client-side step config, optional auth).\n9) Tech Notes (single-page web app, static data).\n10) Risks & Open Questions.\n\nRules:\n- Keep writing concise and implementation-ready.\n- Respect the 24-hour appetite and single-screen constraint.\n- Save/overwrite prd-v1.md.`,
  },
  {
    id: 'build',
    order: 6,
    eyebrow: 'Step 6',
    title: 'Build',
    description:
      'Use the PRD to generate the working MVP: a single-page accordion app with prompt blocks and copy interactions.',
    instructions:
      'Run after PRD is ready. ChatGPT will scaffold code externally and save build-notes.md inside the Project.',
    prompt: `You are a pragmatic full-stack engineer. Work inside this ChatGPT Project.\n\nInputs: prd-v1.md.\nOutputs: build-notes.md plus generated code (outside this Project).\n\nTasks:\n1) Read prd-v1.md thoroughly.\n2) Scaffold a simple Next.js + Tailwind app.\n3) Implement the single-screen accordion UI with 8 steps. Each applicable step shows a prompt block clipped after ~5–6 lines with a soft gradient and a Copy Prompt button that copies full text and briefly shows "Copied".\n4) Keep layout mobile-first and minimal.\n5) Document in build-notes.md: tech stack, commands to run locally, how to deploy, and any shortcuts taken.\n6) Keep scope to a 24-hour MVP.\n\nRules:\n- No backend database or integrations.\n- No automation of ChatGPT calls (copy/paste only).`,
  },
  {
    id: 'test',
    order: 7,
    eyebrow: 'Step 7',
    title: 'Test',
    description:
      'Validate the build against the PRD, capture findings, and outline a tiny launch plan.',
    instructions:
      'Use after the build. ChatGPT will run tests conceptually, fix easy bugs, and write test-report.md.',
    prompt: `You are QA + launch prep. Work inside this ChatGPT Project.\n\nInputs: prd-v1.md and the current build.\nOutput: test-report.md.\n\nTasks:\n1) Test the app against prd-v1.md: accordion behavior, prompt clipping, copy state, mobile layout.\n2) List tests performed and results.\n3) Note bugs found and how they were fixed (or mark as known issues).\n4) Capture any UX polish and microcopy tweaks.\n5) Write a brief launch plan for real users.\n6) Save all of the above to test-report.md.\n\nRules:\n- Keep writing concise and action-oriented.\n- No new features beyond the PRD.`,
  },
];

function createStepElement(step) {
  const template = document.getElementById('step-template');
  const article = template.content.firstElementChild.cloneNode(true);
  const header = article.querySelector('.step__header');
  const toggle = article.querySelector('.step__toggle');
  const toggleIcon = article.querySelector('.toggle-icon');
  const eyebrow = article.querySelector('.step__eyebrow');
  const title = article.querySelector('.step__title');
  const content = article.querySelector('.step__content');
  const description = article.querySelector('.step__description');
  const instructions = article.querySelector('.step__instructions');
  const promptBlock = article.querySelector('.prompt');
  const promptBody = article.querySelector('.prompt__body');
  const copyButton = article.querySelector('.prompt__copy');
  const copyStatus = article.querySelector('.prompt__status');

  const contentId = `${step.id}-content`;
  content.id = contentId;
  toggle.setAttribute('aria-controls', contentId);
  toggle.setAttribute('aria-expanded', 'false');
  content.setAttribute('role', 'region');

  eyebrow.textContent = step.eyebrow;
  title.textContent = step.title;
  const titleId = `${step.id}-title`;
  title.id = titleId;
  content.setAttribute('aria-labelledby', titleId);
  description.textContent = step.description;
  instructions.textContent = step.instructions;
  toggle.setAttribute('aria-label', `Open ${step.title}`);

  const hasPrompt = Boolean(step.prompt);
  if (hasPrompt) {
    promptBlock.hidden = false;
    promptBody.textContent = step.prompt;
    copyButton.addEventListener('click', () => handleCopy(step.prompt, copyButton, copyStatus));
  }

  function toggleStep(forceOpen) {
    const isHidden = content.hasAttribute('hidden');
    const shouldOpen = forceOpen !== undefined ? forceOpen : isHidden;

    if (shouldOpen) {
      content.removeAttribute('hidden');
      toggleIcon.textContent = '–';
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', `Close ${step.title}`);
    } else {
      content.setAttribute('hidden', '');
      toggleIcon.textContent = '+';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', `Open ${step.title}`);
    }

    if (navigator.vibrate) {
      navigator.vibrate(6);
    }
  }

  header.addEventListener('click', (event) => {
    if (event.target === copyButton) return;
    toggleStep();
  });
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleStep();
  });

  if (step.isExpanded) {
    toggleStep(true);
  }

  return article;
}

async function handleCopy(text, button, statusEl) {
  const original = button.textContent;
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = 'Copied';
    if (statusEl) {
      statusEl.textContent = 'Prompt copied to clipboard';
    }
  } catch (error) {
    button.textContent = 'Copy failed';
    if (statusEl) {
      statusEl.textContent = 'Copy failed';
    }
  }
  setTimeout(() => {
    button.textContent = original;
    if (statusEl) {
      statusEl.textContent = '';
    }
  }, 1400);
}

function renderSteps() {
  const container = document.getElementById('steps');
  stepsData
    .sort((a, b) => a.order - b.order)
    .forEach((step) => {
      const element = createStepElement(step);
      container.appendChild(element);
    });
}

renderSteps();
