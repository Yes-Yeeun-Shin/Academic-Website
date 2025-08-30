---
layout: basic
title: Publications
permalink: /publications/
description: Peer-reviewed HCI publications. (* equal contribution).
---

<div class="publications">
  {% bibliography --query @*[keywords!=thesis] %}
</div>

<div class="publications thesis-section">
  <h2 class="thesis-title">Thesis</h2>
  {% bibliography --query @*[keywords=thesis] %}
</div>