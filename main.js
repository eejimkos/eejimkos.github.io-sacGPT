var ajaxCall = (key, url, prompt) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: "POST",
      dataType: "json",
      data: JSON.stringify({
        model: "text-embedding-ada-002",
        prompt: prompt,
        max_tokens: 1024,
        n: 1,
        temperature: 0.5,
      }),
      headers: {
        "Content-Type": "application/json",
        "AI-Resource-Group": "default",
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vc2FwLWFpLWZhY3Rvcnktd3Z4NDd6Z3kuYXV0aGVudGljYXRpb24uZXUxMC5oYW5hLm9uZGVtYW5kLmNvbS90b2tlbl9rZXlzIiwia2lkIjoiZGVmYXVsdC1qd3Qta2V5LTM5MzE3OTI2MSIsInR5cCI6IkpXVCIsImppZCI6ICJiUlo4YXQyaWpPV3orV3hXdHhoamcrV0wzWkZoTExwZ2UyOHBQTFRCK3NjPSJ9.eyJqdGkiOiJmMmM4ZDZmMTY5MTk0NTNkOGMxZTk2MDQwMTljOGUzYSIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiIzM2I3MjE2Yy1jYmZhLTQ1NGUtYjVmNi00YzEzY2JmYTBiODIiLCJ6ZG4iOiJzYXAtYWktZmFjdG9yeS13dng0N3pneSIsInNlcnZpY2VpbnN0YW5jZWlkIjoiZGUwYTk0MjgtODExOC00ZTRlLWFlOTEtOTAxN2I5NDIxYjJhIn0sInN1YiI6InNiLWRlMGE5NDI4LTgxMTgtNGU0ZS1hZTkxLTkwMTdiOTQyMWIyYSFiMTI4OTIyfGFpY29yZSFiNTQwIiwiYXV0aG9yaXRpZXMiOlsiYWljb3JlIWI1NDAuZG9ja2VycmVnaXN0cnlzZWNyZXQuY3JlZGVudGlhbHMudXBkYXRlIiwiYWljb3JlIWI1NDAubWxmY29ubmVjdGlvbi5jcmVkZW50aWFscy5jcmVhdGUiLCJhaWNvcmUhYjU0MC5kb2NrZXJyZWdpc3RyeXNlY3JldC5jcmVkZW50aWFscy5kZWxldGUiLCJhaWNvcmUhYjU0MC5yZXBvc2l0b3JpZXMucmVhZCIsImFpY29yZSFiNTQwLmRvY2tlcnJlZ2lzdHJ5c2VjcmV0LmNyZWRlbnRpYWxzLnJlYWQiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuZXhlY3V0aW9uc2NoZWR1bGVzLmNyZWF0ZSIsImFpY29yZSFiNTQwLm1ldGEucmVhZCIsImFpY29yZSFiNTQwLnNlY3JldHMuY3JlYXRlIiwiYWljb3JlIWI1NDAuZGF0YXNldHMudXBsb2FkIiwiYWljb3JlIWI1NDAuZXhlY3V0aW9ucy5sb2dzLnJlYWQiLCJhaWNvcmUhYjU0MC5sb2dzLnJlYWQiLCJhaWNvcmUhYjU0MC5vYmplY3RzdG9yZXNlY3JldC5jcmVkZW50aWFscy5jcmVhdGUiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuZXhlY3V0aW9ucy5kZWxldGUiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MubWV0cmljcy5kZWxldGUiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MucmVhZCIsImFpY29yZSFiNTQwLmtwaXMucmVhZCIsInVhYS5yZXNvdXJjZSIsImFpY29yZSFiNTQwLnJlc291cmNlZ3JvdXAuY3JlYXRlIiwiYWljb3JlIWI1NDAubWxmY29ubmVjdGlvbi5jcmVkZW50aWFscy5yZWFkIiwiYWljb3JlIWI1NDAub2JqZWN0c3RvcmVzZWNyZXQuY3JlZGVudGlhbHMudXBkYXRlIiwiYWljb3JlIWI1NDAuc2VjcmV0cy5yZWFkIiwiYWljb3JlIWI1NDAuYXBwbGljYXRpb25zLnVwZGF0ZSIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5leGVjdXRpb25zLmNhbmNlbCIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5kZXBsb3ltZW50cy51cGRhdGUiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuY29uZmlndXJhdGlvbnMuY3JlYXRlIiwiYWljb3JlIWI1NDAucmVwb3NpdG9yaWVzLmRlbGV0ZSIsImFpY29yZSFiNTQwLmRvY2tlcnJlZ2lzdHJ5c2VjcmV0LmNyZWRlbnRpYWxzLmNyZWF0ZSIsImFpY29yZSFiNTQwLnNlY3JldHMuZGVsZXRlIiwiYWljb3JlIWI1NDAub2JqZWN0c3RvcmVzZWNyZXQuY3JlZGVudGlhbHMucmVhZCIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5jb25maWd1cmF0aW9ucy5yZWFkIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmRlcGxveW1lbnRzLmNyZWF0ZSIsImFpY29yZSFiNTQwLnNlY3JldHMudXBkYXRlIiwiYWljb3JlIWI1NDAuc2VydmljZXMucmVhZCIsImFpY29yZSFiNTQwLmFwcGxpY2F0aW9ucy5jcmVhdGUiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuZXhlY3V0aW9ucy5jcmVhdGUiLCJhaWNvcmUhYjU0MC5yZXNvdXJjZWdyb3VwLnJlYWQiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MubWV0cmljcy5yZWFkIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLm1ldHJpY3MuY3JlYXRlIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmV4ZWN1dGlvbnNjaGVkdWxlcy5yZWFkIiwiYWljb3JlIWI1NDAubWxmY29ubmVjdGlvbi5jcmVkZW50aWFscy5kZWxldGUiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuZXhlY3V0YWJsZXMucmVhZCIsImFpY29yZSFiNTQwLmRhdGFzZXRzLmRlbGV0ZSIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5leGVjdXRpb25zY2hlZHVsZXMuZGVsZXRlIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmV4ZWN1dGlvbnNjaGVkdWxlcy51cGRhdGUiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuZGVwbG95bWVudHMucHJlZGljdCIsImFpY29yZSFiNTQwLm1sZmNvbm5lY3Rpb24uY3JlZGVudGlhbHMudXBkYXRlIiwiYWljb3JlIWI1NDAuZGVwbG95bWVudHMubG9ncy5yZWFkIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmRlcGxveW1lbnRzLnJlYWQiLCJhaWNvcmUhYjU0MC5hcHBsaWNhdGlvbnMucmVhZCIsImFpY29yZSFiNTQwLm9iamVjdHN0b3Jlc2VjcmV0LmNyZWRlbnRpYWxzLmRlbGV0ZSIsImFpY29yZSFiNTQwLnJlcG9zaXRvcmllcy5jcmVhdGUiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuYXJ0aWZhY3RzLmNyZWF0ZSIsImFpY29yZSFiNTQwLnJlc291cmNlZ3JvdXAuZGVsZXRlIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmV4ZWN1dGlvbnMucmVhZCIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5hcnRpZmFjdHMucmVhZCIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5kZXBsb3ltZW50cy5kZWxldGUiLCJhaWNvcmUhYjU0MC5hcHBsaWNhdGlvbnMuZGVsZXRlIiwiYWljb3JlIWI1NDAuZGF0YXNldHMuZG93bmxvYWQiLCJhaWNvcmUhYjU0MC5yZXBvc2l0b3JpZXMudXBkYXRlIl0sInNjb3BlIjpbImFpY29yZSFiNTQwLmRvY2tlcnJlZ2lzdHJ5c2VjcmV0LmNyZWRlbnRpYWxzLnVwZGF0ZSIsImFpY29yZSFiNTQwLm1sZmNvbm5lY3Rpb24uY3JlZGVudGlhbHMuY3JlYXRlIiwiYWljb3JlIWI1NDAuZG9ja2VycmVnaXN0cnlzZWNyZXQuY3JlZGVudGlhbHMuZGVsZXRlIiwiYWljb3JlIWI1NDAucmVwb3NpdG9yaWVzLnJlYWQiLCJhaWNvcmUhYjU0MC5kb2NrZXJyZWdpc3RyeXNlY3JldC5jcmVkZW50aWFscy5yZWFkIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmV4ZWN1dGlvbnNjaGVkdWxlcy5jcmVhdGUiLCJhaWNvcmUhYjU0MC5tZXRhLnJlYWQiLCJhaWNvcmUhYjU0MC5zZWNyZXRzLmNyZWF0ZSIsImFpY29yZSFiNTQwLmRhdGFzZXRzLnVwbG9hZCIsImFpY29yZSFiNTQwLmV4ZWN1dGlvbnMubG9ncy5yZWFkIiwiYWljb3JlIWI1NDAubG9ncy5yZWFkIiwiYWljb3JlIWI1NDAub2JqZWN0c3RvcmVzZWNyZXQuY3JlZGVudGlhbHMuY3JlYXRlIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmV4ZWN1dGlvbnMuZGVsZXRlIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLm1ldHJpY3MuZGVsZXRlIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLnJlYWQiLCJhaWNvcmUhYjU0MC5rcGlzLnJlYWQiLCJ1YWEucmVzb3VyY2UiLCJhaWNvcmUhYjU0MC5yZXNvdXJjZWdyb3VwLmNyZWF0ZSIsImFpY29yZSFiNTQwLm1sZmNvbm5lY3Rpb24uY3JlZGVudGlhbHMucmVhZCIsImFpY29yZSFiNTQwLm9iamVjdHN0b3Jlc2VjcmV0LmNyZWRlbnRpYWxzLnVwZGF0ZSIsImFpY29yZSFiNTQwLnNlY3JldHMucmVhZCIsImFpY29yZSFiNTQwLmFwcGxpY2F0aW9ucy51cGRhdGUiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuZXhlY3V0aW9ucy5jYW5jZWwiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuZGVwbG95bWVudHMudXBkYXRlIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmNvbmZpZ3VyYXRpb25zLmNyZWF0ZSIsImFpY29yZSFiNTQwLnJlcG9zaXRvcmllcy5kZWxldGUiLCJhaWNvcmUhYjU0MC5kb2NrZXJyZWdpc3RyeXNlY3JldC5jcmVkZW50aWFscy5jcmVhdGUiLCJhaWNvcmUhYjU0MC5zZWNyZXRzLmRlbGV0ZSIsImFpY29yZSFiNTQwLm9iamVjdHN0b3Jlc2VjcmV0LmNyZWRlbnRpYWxzLnJlYWQiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuY29uZmlndXJhdGlvbnMucmVhZCIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5kZXBsb3ltZW50cy5jcmVhdGUiLCJhaWNvcmUhYjU0MC5zZWNyZXRzLnVwZGF0ZSIsImFpY29yZSFiNTQwLnNlcnZpY2VzLnJlYWQiLCJhaWNvcmUhYjU0MC5hcHBsaWNhdGlvbnMuY3JlYXRlIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmV4ZWN1dGlvbnMuY3JlYXRlIiwiYWljb3JlIWI1NDAucmVzb3VyY2Vncm91cC5yZWFkIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLm1ldHJpY3MucmVhZCIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5tZXRyaWNzLmNyZWF0ZSIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5leGVjdXRpb25zY2hlZHVsZXMucmVhZCIsImFpY29yZSFiNTQwLm1sZmNvbm5lY3Rpb24uY3JlZGVudGlhbHMuZGVsZXRlIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmV4ZWN1dGFibGVzLnJlYWQiLCJhaWNvcmUhYjU0MC5kYXRhc2V0cy5kZWxldGUiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuZXhlY3V0aW9uc2NoZWR1bGVzLmRlbGV0ZSIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5leGVjdXRpb25zY2hlZHVsZXMudXBkYXRlIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmRlcGxveW1lbnRzLnByZWRpY3QiLCJhaWNvcmUhYjU0MC5tbGZjb25uZWN0aW9uLmNyZWRlbnRpYWxzLnVwZGF0ZSIsImFpY29yZSFiNTQwLmRlcGxveW1lbnRzLmxvZ3MucmVhZCIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5kZXBsb3ltZW50cy5yZWFkIiwiYWljb3JlIWI1NDAuYXBwbGljYXRpb25zLnJlYWQiLCJhaWNvcmUhYjU0MC5vYmplY3RzdG9yZXNlY3JldC5jcmVkZW50aWFscy5kZWxldGUiLCJhaWNvcmUhYjU0MC5yZXBvc2l0b3JpZXMuY3JlYXRlIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmFydGlmYWN0cy5jcmVhdGUiLCJhaWNvcmUhYjU0MC5yZXNvdXJjZWdyb3VwLmRlbGV0ZSIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5leGVjdXRpb25zLnJlYWQiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuYXJ0aWZhY3RzLnJlYWQiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuZGVwbG95bWVudHMuZGVsZXRlIiwiYWljb3JlIWI1NDAuYXBwbGljYXRpb25zLmRlbGV0ZSIsImFpY29yZSFiNTQwLmRhdGFzZXRzLmRvd25sb2FkIiwiYWljb3JlIWI1NDAucmVwb3NpdG9yaWVzLnVwZGF0ZSJdLCJjbGllbnRfaWQiOiJzYi1kZTBhOTQyOC04MTE4LTRlNGUtYWU5MS05MDE3Yjk0MjFiMmEhYjEyODkyMnxhaWNvcmUhYjU0MCIsImNpZCI6InNiLWRlMGE5NDI4LTgxMTgtNGU0ZS1hZTkxLTkwMTdiOTQyMWIyYSFiMTI4OTIyfGFpY29yZSFiNTQwIiwiYXpwIjoic2ItZGUwYTk0MjgtODExOC00ZTRlLWFlOTEtOTAxN2I5NDIxYjJhIWIxMjg5MjJ8YWljb3JlIWI1NDAiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjVkOThjMzNkIiwiaWF0IjoxNzE3Njk4MTA4LCJleHAiOjE3MTc3NDEzMDgsImlzcyI6Imh0dHBzOi8vc2FwLWFpLWZhY3Rvcnktd3Z4NDd6Z3kuYXV0aGVudGljYXRpb24uZXUxMC5oYW5hLm9uZGVtYW5kLmNvbS9vYXV0aC90b2tlbiIsInppZCI6IjMzYjcyMTZjLWNiZmEtNDU0ZS1iNWY2LTRjMTNjYmZhMGI4MiIsImF1ZCI6WyJhaWNvcmUhYjU0MC5vYmplY3RzdG9yZXNlY3JldC5jcmVkZW50aWFscyIsImFpY29yZSFiNTQwLmRhdGFzZXRzIiwiYWljb3JlIWI1NDAua3BpcyIsImFpY29yZSFiNTQwLmRvY2tlcnJlZ2lzdHJ5c2VjcmV0LmNyZWRlbnRpYWxzIiwiYWljb3JlIWI1NDAuZGVwbG95bWVudHMubG9ncyIsImFpY29yZSFiNTQwLm1ldGEiLCJ1YWEiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuYXJ0aWZhY3RzIiwiYWljb3JlIWI1NDAucmVwb3NpdG9yaWVzIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmV4ZWN1dGlvbnNjaGVkdWxlcyIsImFpY29yZSFiNTQwLnNjZW5hcmlvcy5leGVjdXRhYmxlcyIsImFpY29yZSFiNTQwLm1sZmNvbm5lY3Rpb24uY3JlZGVudGlhbHMiLCJhaWNvcmUhYjU0MC5sb2dzIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmRlcGxveW1lbnRzIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLmV4ZWN1dGlvbnMiLCJhaWNvcmUhYjU0MC5zY2VuYXJpb3MuY29uZmlndXJhdGlvbnMiLCJhaWNvcmUhYjU0MC5zZXJ2aWNlcyIsImFpY29yZSFiNTQwLnNjZW5hcmlvcyIsImFpY29yZSFiNTQwLmFwcGxpY2F0aW9ucyIsImFpY29yZSFiNTQwLnJlc291cmNlZ3JvdXAiLCJhaWNvcmUhYjU0MC5zZWNyZXRzIiwiYWljb3JlIWI1NDAuc2NlbmFyaW9zLm1ldHJpY3MiLCJzYi1kZTBhOTQyOC04MTE4LTRlNGUtYWU5MS05MDE3Yjk0MjFiMmEhYjEyODkyMnxhaWNvcmUhYjU0MCIsImFpY29yZSFiNTQwLmV4ZWN1dGlvbnMubG9ncyJdfQ.Nua_d6JnBEdecD8p-n_CDSrrPKEY83zV_g8piKLEVNa6qVfJuEqmvvyV8yo63XW84rUy9SpuXxjpq1oL8PwGTtFKsOtCrbCk2QHqPIXfVKnDjC4x7MedyJZSlCJjnqhxPvDvhIXgtmC1xVVTbWaLIaqdWMIClUZinPPauVqNbqhymhNpG7-OoUrWjuLYPiwFZBdEhbNYEinA0Xxei9RUEEd9vunaIKY3VnULh70aNCG_wFJohkUIyGXYcR4mDC0477s4Fg_LU1EFKayCmpHOV_RN7K3jhSg7Aw5vDbnL_HX6arXd94TSsiGB-mnUle2aY3a7POhRMSEAM7Ng8gLfPA
`,
      },
      body: {
    "model" : "text-embedding-ada-002",
    "input" : "lala"
},
      crossDomain: true,
      success: function (response, status, xhr) {
        resolve({ response, status, xhr });
      },
      error: function (xhr, status, error) {
        const err = new Error('xhr error');
        err.status = xhr.status;
        reject(err);
      },
    });
  });
};

const url = "https://api.ai.prod.eu-central-1.aws.ml.hana.ondemand.com/v2/inference/deployments/dfa23faa07faad6e/embeddings?api-version=2023-05-15";

(function () {
  const template = document.createElement("template");
  template.innerHTML = `
      <style>
      </style>
      <div id="root" style="width: 100%; height: 100%;">
      </div>
    `;
  class MainWebComponent extends HTMLElement {
    async post(apiKey, endpoint, prompt) {
      const { response } = await ajaxCall(
        apiKey,
        `${url}`,
        prompt
      );
      console.log(response.choices[0].text);
      return response.choices[0].text;
    }
  }
  customElements.define("custom-widget", MainWebComponent);
})();
